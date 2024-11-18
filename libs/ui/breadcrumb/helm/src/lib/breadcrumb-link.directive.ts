import { Directive, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

@Directive({
	selector: '[hlmBreadcrumbLink]',
	standalone: true,
	hostDirectives: [
		{
			directive: RouterLink,
			inputs: [
				'target',
				'queryParams',
				'fragment',
				'queryParamsHandling',
				'state',
				'info',
				'relativeTo',
				'preserveFragment',
				'skipLocationChange',
				'replaceUrl',
				'routerLink: link',
			],
		},
	],
	host: {
		'[class]': '_computedClass()',
	},
})
export class HlmBreadcrumbLinkDirective {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	public readonly link = input<string | any[] | null | undefined>();

	protected _computedClass = computed(() => hlm('transition-colors hover:text-foreground', this.userClass()));
}
