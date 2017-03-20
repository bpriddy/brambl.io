import extend from 'lodash-es/extend';
import bindAll from 'lodash-es/bindAll';

import controlpanelEl from '../pug/controlpanel.pug';

class ControlPanel {
	
	constructor(options) {
		extend(this, options);
		bindAll(this, [
			'bindEvents',
			'saveChanges',
			'showSelectedNode',
			'showDescendants',
			'showAncestors',
			'showLabelBranch',
			'showUnfinished',
			'editText'
		])
		this.state = {
			showingDescendants: false,
			showingAncestors: false,
			showingLabelBranch: false,
			showingUnfinishedBranches: false,
			currentNode: null
		}
		this.create();
		this.bindEvents();
	}

	create() {
		this.$parent.append(controlpanelEl());
		this.$selectedNode = this.$parent.find(".selected-node");
		this.$currentText = this.$selectedNode.find(".text");
	}

	bindEvents() {
		this.$parent.find(".save.btn").on("click", this.saveChanges)
		this.$parent.find(".btn.showunfinished").on("click", this.showUnfinished)
		this.events.on("node:select", this.showSelectedNode)
		this.$selectedNode.find(".btn.descendants").on("click", this.showDescendants)
		this.$selectedNode.find(".btn.ancestors").on("click", this.showAncestors)
		this.$selectedNode.find(".btn.labelbranch").on("click", this.showLabelBranch)
		this.$selectedNode.find(".text").on("keyup", this.editText)
	}

	showLabelBranch(e) {
		if(!this.state.showingLabelBranch) {
			this.$selectedNode.find(".btn.labelbranch").addClass("selected")
		} else {
			this.$selectedNode.find(".btn.labelbranch").removeClass("selected")
		}
		this.state.showingLabelBranch = !this.state.showingLabelBranch;
		this.events.trigger("node:show:labelbranch", {
			node: this.state.currentNode,
			show: this.state.showingLabelBranch
		})
	}

	showDescendants(e) {
		if(!this.state.showDescendants) {
			this.$selectedNode.find(".btn.descendants").addClass("selected")
		} else {
			this.$selectedNode.find(".btn.descendants").removeClass("selected")
		}
		this.state.showDescendants = !this.state.showDescendants;
		this.events.trigger("node:show:descendants", {
			node: this.state.currentNode,
			show: this.state.showDescendants
		})
	}

	showAncestors(e) {
		if(!this.state.showAncestors) {
			this.$selectedNode.find(".btn.ancestors").addClass("selected")
		} else {
			this.$selectedNode.find(".btn.ancestors").removeClass("selected")
		}
		this.state.showAncestors = !this.state.showAncestors;
		this.events.trigger("node:show:ancestors", {
			node: this.state.currentNode,
			show: this.state.showAncestors
		})
	}

	showUnfinished(e) {
		if(!this.state.showingUnfinishedBranches) {
			this.$selectedNode.find(".btn.showunfinished").addClass("selected")
		} else {
			this.$selectedNode.find(".btn.showunfinished").removeClass("selected")
		}
		this.state.showingUnfinishedBranches = !this.state.showingUnfinishedBranches;
		this.events.trigger("node:show:unfinished", {
			show: this.state.showingUnfinishedBranches
		});
	}


	editText(e) {
		console.log(this.$currentText.html());
		
		this.events.trigger('node:update', {
			changed: ['text'],
			data: {text: this.$currentText.html() },
			id: this.state.currentNode.data.id
		})

	}

	saveChanges() {
		this.events.trigger("savechanges")
	}

	showSelectedNode(node) {
		this.state.showDescendant = false
		this.state.showAncestors = false;
		this.$selectedNode.find(".btn.descendants").removeClass("selected")
		this.$selectedNode.find(".btn.ancestors").removeClass("selected")
		if(node.data.id > -1) {
			this.state.currentNode = node;
			this.$selectedNode.find(".text").html(node.data.text)
			this.$selectedNode.addClass("selected")
		} else {
			this.currentNode = null;
			this.$selectedNode.removeClass("selected")
		}
	}
}

export default ControlPanel;