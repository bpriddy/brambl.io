import extend from 'lodash-es/extend';
import bindAll from 'lodash-es/bindAll';

class Base {
	constructor(options, functions) {
		this.content = {};
		this.state = {};
		extend(this, options);
		functions.forEach((f) => {
			if(!this[f]) throw "function "+f+" is not a part of this class definition"
		})
		bindAll(this,functions);
	}
}

export default Base;