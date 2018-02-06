'use babel';

const {shell} = require('electron');
import { CompositeDisposable } from 'atom';

export default {

	subscriptions: null,

	activate(state) {
		this.subscriptions = new CompositeDisposable();

		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:adding-new-utilities': () => this.openUrl('https://tailwindcss.com/docs/adding-new-utilities')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:background-attachment': () => this.openUrl('https://tailwindcss.com/docs/background-attachment')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:background-color': () => this.openUrl('https://tailwindcss.com/docs/background-color')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:background-position': () => this.openUrl('https://tailwindcss.com/docs/background-position')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:background-repeat': () => this.openUrl('https://tailwindcss.com/docs/background-repeat')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:background-size': () => this.openUrl('https://tailwindcss.com/docs/background-size')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:border-color': () => this.openUrl('https://tailwindcss.com/docs/border-color')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:border-radius': () => this.openUrl('https://tailwindcss.com/docs/border-radius')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:border-style': () => this.openUrl('https://tailwindcss.com/docs/border-style')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:border-width': () => this.openUrl('https://tailwindcss.com/docs/border-width')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:colors': () => this.openUrl('https://tailwindcss.com/docs/colors')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:configuration': () => this.openUrl('https://tailwindcss.com/docs/configuration')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:container': () => this.openUrl('https://tailwindcss.com/docs/container')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:controlling-file-size': () => this.openUrl('https://tailwindcss.com/docs/controlling-file-size')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:cursor': () => this.openUrl('https://tailwindcss.com/docs/cursor')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:display': () => this.openUrl('https://tailwindcss.com/docs/display')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:examples': () => this.openUrl('https://tailwindcss.com/docs/examples')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:extracting-components': () => this.openUrl('https://tailwindcss.com/docs/extracting-components')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:flexbox-align-content': () => this.openUrl('https://tailwindcss.com/docs/flexbox-align-content')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:flexbox-align-items': () => this.openUrl('https://tailwindcss.com/docs/flexbox-align-items')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:flexbox-align-self': () => this.openUrl('https://tailwindcss.com/docs/flexbox-align-self')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:flexbox-direction': () => this.openUrl('https://tailwindcss.com/docs/flexbox-direction')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:flexbox-display': () => this.openUrl('https://tailwindcss.com/docs/flexbox-display')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:flexbox-flex-grow-shrink': () => this.openUrl('https://tailwindcss.com/docs/flexbox-flex-grow-shrink')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:flexbox-justify-content': () => this.openUrl('https://tailwindcss.com/docs/flexbox-justify-content')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:flexbox-wrapping': () => this.openUrl('https://tailwindcss.com/docs/flexbox-wrapping')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:floats': () => this.openUrl('https://tailwindcss.com/docs/floats')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:font-weight': () => this.openUrl('https://tailwindcss.com/docs/font-weight')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:fonts': () => this.openUrl('https://tailwindcss.com/docs/fonts')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:forms': () => this.openUrl('https://tailwindcss.com/docs/forms')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:functions-and-directives': () => this.openUrl('https://tailwindcss.com/docs/functions-and-directives')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:height': () => this.openUrl('https://tailwindcss.com/docs/height')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:installation': () => this.openUrl('https://tailwindcss.com/docs/installation')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:letter-spacing': () => this.openUrl('https://tailwindcss.com/docs/letter-spacing')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:line-height': () => this.openUrl('https://tailwindcss.com/docs/line-height')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:lists': () => this.openUrl('https://tailwindcss.com/docs/lists')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:max-height': () => this.openUrl('https://tailwindcss.com/docs/max-height')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:max-width': () => this.openUrl('https://tailwindcss.com/docs/max-width')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:min-height': () => this.openUrl('https://tailwindcss.com/docs/min-height')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:min-width': () => this.openUrl('https://tailwindcss.com/docs/min-width')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:opacity': () => this.openUrl('https://tailwindcss.com/docs/opacity')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:overflow': () => this.openUrl('https://tailwindcss.com/docs/overflow')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:pointer-events': () => this.openUrl('https://tailwindcss.com/docs/pointer-events')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:positioning': () => this.openUrl('https://tailwindcss.com/docs/positioning')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:resize': () => this.openUrl('https://tailwindcss.com/docs/resize')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:responsive-design': () => this.openUrl('https://tailwindcss.com/docs/responsive-design')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:shadows': () => this.openUrl('https://tailwindcss.com/docs/shadows')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:spacing': () => this.openUrl('https://tailwindcss.com/docs/spacing')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:state-variants': () => this.openUrl('https://tailwindcss.com/docs/state-variants')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:svg': () => this.openUrl('https://tailwindcss.com/docs/svg')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:text-alignment': () => this.openUrl('https://tailwindcss.com/docs/text-alignment')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:text-color': () => this.openUrl('https://tailwindcss.com/docs/text-color')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:text-sizing': () => this.openUrl('https://tailwindcss.com/docs/text-sizing')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:text-style': () => this.openUrl('https://tailwindcss.com/docs/text-style')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:user-select': () => this.openUrl('https://tailwindcss.com/docs/user-select')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:vertical-alignment': () => this.openUrl('https://tailwindcss.com/docs/vertical-alignment')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:visibility': () => this.openUrl('https://tailwindcss.com/docs/visibility')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:what-is-tailwind': () => this.openUrl('https://tailwindcss.com/docs/what-is-tailwind')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:whitespace-and-wrapping': () => this.openUrl('https://tailwindcss.com/docs/whitespace-and-wrapping')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:width': () => this.openUrl('https://tailwindcss.com/docs/width')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', { 
			'tailwind-docs:z-index': () => this.openUrl('https://tailwindcss.com/docs/z-index')
		}));
	 }, 

	openUrl(url) { shell.openExternal(url); }
};
