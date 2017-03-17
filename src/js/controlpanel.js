import extend from 'lodash-es/extend';
import bindAll from 'lodash-es/bindAll';

import controlpanelEl from '../pug/controlpanel.pug';

class ControlPanel {
	
	constructor(options) {
		extend(this, options);
		bindAll(this, [
			'bindEvents',
			'saveChanges',
			'showSelectedNode'
		])
		this.create();
		this.bindEvents();
	}

	create() {
		this.$parent.append(controlpanelEl());
	}

	bindEvents() {
		this.$parent.find(".save.btn").on("click", this.saveChanges)
		this.events.on("node:select", this.showSelectedNode)
	}

	saveChanges() {
		this.events.trigger("savechanges")
	}

	showSelectedNode(node) {

		this.$parent.find(".selected-node").html(node.data.text)
	}
}

export default ControlPanel;