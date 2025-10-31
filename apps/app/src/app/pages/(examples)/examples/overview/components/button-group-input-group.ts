import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmButtonGroupImports } from '@spartan-ng/helm/button-group';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';

@Component({
	selector: 'spartan-button-group-input-group',
	imports: [HlmButtonGroupImports, HlmInputGroupImports, HlmButton, HlmIcon, NgIcon],
	providers: [provideIcons({ lucidePlus })],
	template: `
		<div hlmButtonGroup class="w-full [--radius:9999rem]">
			<div hlmButtonGroup>
				<button hlmBtn variant="outline" size="icon">
					<ng-icon hlm name="lucidePlus" size="sm" />
				</button>
			</div>
			<div hlmButtonGroup class="flex-1">
				<div hlmInputGroup>
					<input hlmInputGroupInput placeholder="Send a message" />
					<div hlmInputGroupAddon align="inline-end">
						<button
							hlmInputGroupButton
							class="data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
							size="icon-xs"
							[attr.data-active]="enableVoiceMode()"
							(click)="enableVoiceMode.set(!enableVoiceMode())"
						>
							<ng-icon hlm name="lucideAudioLines" />
						</button>
					</div>
				</div>
			</div>
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupInputGroup {
	protected readonly enableVoiceMode = signal(false);
}
