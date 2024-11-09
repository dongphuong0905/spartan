import { Component, computed, input } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideEllipsis } from '@ng-icons/lucide';
import { hlm } from '@spartan-ng/ui-core';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'hlm-breadcrumb-ellipsis',
	standalone: true,
	imports: [HlmIconComponent],
	providers: [provideIcons({ lucideEllipsis })],
	template: `
		<span role="presentation" aria-hidden="true" [class]="_computedClass()">
			<hlm-icon name="lucideEllipsis" class="h-4 w-4" />
			<span class="sr-only">More</span>
		</span>
	`,
})
export class HlmBreadcrumbEllipsisComponent {
	public readonly class = input<string>('');

	protected _computedClass = computed(() => hlm('flex h-9 w-9 items-center justify-center', this.class()));
}
