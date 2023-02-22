import { Component, OnInit } from '@angular/core';
import { PracticalAreasMock } from '@root/core/mocks/practical-area.mocks';

@Component({
    selector: 'app-areas-de-practica',
    templateUrl: './areas-de-practica.component.html',
    styleUrls: ['./areas-de-practica.component.scss'],
})
export class AreasDePracticaComponent implements OnInit {
    public especialidadesAll;
    constructor() {
        this.especialidadesAll = PracticalAreasMock;
    }

    ngOnInit(): void {}
}
