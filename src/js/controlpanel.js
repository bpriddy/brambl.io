import extend from 'lodash-es/extend';
import bindAll from 'lodash-es/bindAll';

import controlpanelEl from '../pug/controlpanel.pug';

class ControlPanel {
	
	constructor(options) {
		extend(this, options);
		bindAll(this, [
			'bindEvents',
			'saveChanges'
		])
		this.create();
		this.bindEvents();
	}

	create() {
		this.$parent.append(controlpanelEl());
	}

	bindEvents() {
		this.$parent.find(".save.btn").on("click", this.saveChanges)
	}

	saveChanges() {
		this.events.trigger("savechanges")
	}
}

export default ControlPanel;