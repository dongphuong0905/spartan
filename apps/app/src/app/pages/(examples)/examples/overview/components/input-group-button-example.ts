import { Component, computed, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tablerInfoCircle, tablerStar } from '@ng-icons/tabler-icons';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';

@Component({
	selector: 'spartan-input-group-button-example',
	imports: [HlmInputGroupImports, NgIcon, HlmIcon],
	providers: [
		provideIcons({
			tablerInfoCircle,
			tablerStar,
		}),
	],
	template: `
		<div hlmInputGroup class="[--radius:9999px]">
			<div hlmInputGroupAddon>
				<button hlmInputGroupButton variant="secondary" size="icon-xs" brnPopoverTrigger>
					<ng-icon hlm name="tablerInfoCircle" />
				</button>
			</div>

			<div hlmInputGroupAddon class="text-muted-foreground pl-1.5">https://</div>
			<input hlmInputGroupInput id="input-secure-19" />
			<div hlmInputGroupAddon align="inline-end">
				<button hlmInputGroupButton size="icon-xs" (click)="_toggleFavorite()">
					<ng-icon hlm name="tablerStar" [class]="_favoriteClass()" />
				</button>
			</div>
		</div>
	`,
})
export class InputGroupButtonExample {
	protected readonly _isFavorite = signal(false);

	protected readonly _favoriteClass = computed(() =>
		this._isFavorite() ? '[&>svg]:fill-blue-600 [&>svg]:stroke-blue-600' : '',
	);

	protected _toggleFavorite(): void {
		this._isFavorite.update((f) => !f);
	}
}
