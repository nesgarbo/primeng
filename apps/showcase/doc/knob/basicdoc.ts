import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'basic-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>Knob is an input component and used with the standard <i>ngModel</i> directive.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <p-knob [(ngModel)]="value" />
        </div>
        <app-code [code]="code" selector="knob-basic-demo"></app-code>
    `
})
export class BasicDoc {
    value!: number;

    code: Code = {
        basic: `<p-knob [(ngModel)]="value" />`,

        html: `<div class="card flex justify-center">
    <p-knob [(ngModel)]="value" />
</div>`,

        typescript: `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';

@Component({
    selector: 'knob-basic-demo',
    templateUrl: './knob-basic-demo.html',
    standalone: true,
    imports: [FormsModule, Knob]
})
export class KnobBasicDemo {
    value!: number;
}`
    };
}
