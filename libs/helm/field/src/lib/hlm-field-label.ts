import { computed, Directive, input } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { hlm } from '@spartan-ng/helm/utils';
import { ClassValue } from 'clsx';

@Directive({
	selector: '[hlmFieldLabel]',
	hostDirectives: [HlmLabel],
	host: {
		'data-slot': 'field-label',
		'[class]': '_computedClass()',
	},
})
export class HlmFieldLabel {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });

	protected readonly _computedClass = computed(() =>
		hlm(
			'group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50',
			'has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4',
			'has-data-[checked=true]:bg-primary/5 has-data-[checked=true]:border-primary dark:has-data-[checked=true]:bg-primary/10',
			this.userClass(),
		),
	);
}
