import Base from './base.js';

import controlpanelEl from '../pug/controlpanel.pug';

class ControlPanel extends Base {
	
	constructor(options) {
		super(options, [
			'bindEvents',
			'saveChanges',
			'showSelectedNode',
			'showDescendants',
			'showAncestors',
			'showVideo',
			'showLabelBranch',
			'showUnfinished',
			'editText',
			'deleteNode',
			'toggleSection',
			'addCuePoint',
			'addedCuePoint',
			'selectCuePoint',
			'selectedCuePoint',
			'updateScriptControlPanel',
			'updateCuePointsControlPanel',
			'applyCuePointChanges'
		])

		this.state.showingDescendants =  false;
		this.state.showingAncestors =  false;
		this.state.showingLabelBranch =  false;
		this.state.showingUnfinishedBranches =  false;
		this.state.currentNode =  null;
		this.state.currentCuePoint =  null;
		this.state.currentSection =  'script';

		this.create();
		this.bindEvents();
	}

	create() {
		this.$parent.append(controlpanelEl());
		this.$script = this.$parent.find(".section.script");
		this.$cuepoints = this.$parent.find(".section.cuepoints")
		this.$editcuepoint = this.$cuepoints.find(".editcuepoint");
		this.$selectedNode = this.$parent.find(".selected-node");
		this.$currentText = this.$selectedNode.find(".text");
		this.$currentTimestamp = this.$selectedNode.find(".timestamp");
		this.createCuePoints();
	}

	bindEvents() {
		this.$parent.find(".save.btn").on("click", this.saveChanges)
		this.$parent.find(".btn.toggle").on("click", this.toggleSection)
		this.$parent.find(".btn.showunfinished").on("click", this.showUnfinished)
		this.$selectedNode.find(".btn.video").on("click", this.showVideo)
		this.$selectedNode.find(".btn.descendants").on("click", this.showDescendants)
		this.$selectedNode.find(".btn.ancestors").on("click", this.showAncestors)
		this.$selectedNode.find(".btn.labelbranch").on("click", this.showLabelBranch)
		this.$selectedNode.find(".btn.delete").on("click", this.deleteNode)
		this.$selectedNode.find(".text").on("keyup", this.editText)

		this.$cuepoints.find(".addcuepoint").on("click", this.addCuePoint)
		this.$editcuepoint.find(".apply").on("click", this.applyCuePointChanges)
		this.$cuepoints.find(".list .listitem").on("click", this.selectCuePoint)

		this.events.on("node:select", this.showSelectedNode)
		this.events.on("cuepoints:added", this.addedCuePoint)
		this.events.on("cuepoints:selected", this.selectedCuePoint)

	}

	createCuePoints() {
		this.cuepoints.forEach((cp) => {
			this.addedCuePoint(cp);
		})
	}

	showVideo() {
		this.events.trigger("videoplayer:show",{
			timestamp: this.state.currentNode.timestamp
		})
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

	toggleSection() {
		if(this.state.currentSection === "script") {
			this.events.trigger("videoplayer:show")
			this.state.currentSection = "cuepoints";
			this.$cuepoints.addClass("active");
			this.$script.removeClass("active");
			this.$parent.find(".btn.toggle .cuepoints").addClass("active")
			this.$parent.find(".btn.toggle .script").removeClass("active")
		} else {
			this.events.trigger("videoplayer:hide")
			this.state.currentSection = "script";
			this.$cuepoints.removeClass("active");
			this.$script.addClass("active");
			this.$parent.find(".btn.toggle .script").addClass("active")
			this.$parent.find(".btn.toggle .cuepoints").removeClass("active");
		}

	}


	editText(e) {
		// console.log(this.$currentText.html());
		this.events.trigger('node:update', {
			changed: ['text'],
			data: {text: this.$currentText.html() },
			node: this.state.currentNode.data
		})

	}


	deleteNode(e) {
		this.events.trigger("node:delete", this.state.currentNode.data.id)
	}

	saveChanges() {
		this.events.trigger("savechanges")
	}

	showSelectedNode(node) {
		this.state.showDescendant = false
		this.state.showAncestors = false;
		this.$selectedNode.find(".btn.descendants").removeClass("selected")
		this.$selectedNode.find(".btn.ancestors").removeClass("selected")
		if(this.state.currentSection === "script") {
			this.updateScriptControlPanel(node);
		} else {
			this.updateCuePointsControlPanel(node);
		}
	}

	updateScriptControlPanel(node) {
		if(node.data.id > -1) {
			this.state.currentNode = node;
			this.$selectedNode.find(".text").html(node.data.text)
			this.$selectedNode.addClass("selected")
		} else {
			this.currentNode = null;
			this.$selectedNode.removeClass("selected")
		}
	}

	updateCuePointsControlPanel(node) {
		// console.log(this.state.currentCuePoint)
		if(node.data.id > -1 && this.state.currentCuePoint) {
			this.state.currentNode = node;
			this.$editcuepoint.find(".text").html(node.data.text)
			this.$editcuepoint.find(".id").html(node.data.id)
			if(node.data.label === "ending") {
				this.$editcuepoint.find(".ending").prop("checked", true);
			} else {
				this.$editcuepoint.find(".ending").prop("checked", false);
			}
			this.$selectedNode.addClass("selected")
		} else {
			this.currentNode = null;
			this.state.currentCuePoint = null;
			this.$editcuepoint.find(".timestamp").html("")
			this.$editcuepoint.find(".loopAt").html("")
			this.$editcuepoint.find(".text").html("")
			this.$editcuepoint.find(".zone").html("")
			this.$editcuepoint.find(".id").html("")
			this.$editcuepoint.find(".ending").prop("checked", false);
			this.$cuepoints.find(".list .listitem").removeClass("selected");
		}
	}

	addCuePoint() {
		this.events.trigger("cuepoints:add", this.scriptID)
	}

	addedCuePoint(obj) {
		this.$cuepoints.find(".list .listitem").removeClass("selected");
		let $cp = $(`
			<div class='cuepoint listitem selected' data-id="${obj.id}">
				<div class="timestamp">timestamp: ${obj.timestamp}</div>
				<div class="text">text: </div>
			</div>
		`)

		this.$cuepoints.find('.list').prepend($cp)

		$cp.on("click", this.selectCuePoint)
		this.state.currentCuePoint = obj.id;
		this.selectedCuePoint(obj)
	}

	updateCuePoint(obj) {
		// let $cp = this.$cuepoints.find(".listitem [data-id="+obj.id+"]");
		// $cp.find(".timestamp").html(obj.timestamp)
	}

	selectCuePoint(e) {
		// console.log('control panel select cuepoint')
		this.$cuepoints.find(".list .listitem").removeClass("selected");
		$(e.currentTarget).closest(".listitem").addClass("selected");
		let id = parseInt($(e.currentTarget).attr("data-id"));
		this.state.currentCuePoint = id;
		this.events.trigger("cuepoints:select", id)
	}

	selectedCuePoint(obj) {
		this.state.currentCuePoint = obj.id;
		this.$editcuepoint.find(".timestamp").html(obj.timestamp)
		this.$editcuepoint.find(".id").html(obj.nodeID)
		this.$editcuepoint.find(".loopAt").html(obj.loopAt)
		this.$editcuepoint.find(".zone").html(obj.zone)
		this.$editcuepoint.find(".text").html(obj.text)
		this.$editcuepoint.find(".ending").prop("checked", obj.ending);
		this.$selectedNode.addClass("selected")
	}

	applyCuePointChanges() {
		if(!this.state.currentCuePoint) return;
		let obj = {
			timestamp: parseFloat(this.$editcuepoint.find(".timestamp").html()),
			loopAt: parseFloat(this.$editcuepoint.find(".loopAt").html()),
			nodeID: parseInt(this.$editcuepoint.find(".id").html()),
			zone: this.$editcuepoint.find(".zone").html(),
			text: this.$editcuepoint.find(".text").html(),
			ending: this.$editcuepoint.find(".ending").prop("checked"),
			id: this.state.currentCuePoint
		}
		let $li = this.$cuepoints.find(".list .listitem[data-id='"+this.state.currentCuePoint+"']");
		$li.find(".text").html("text: "+this.$editcuepoint.find(".text").html())
		this.events.trigger("cuepoints:edit", obj)
	}

}

export default ControlPanel;