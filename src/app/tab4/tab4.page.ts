import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  messages = [
    { color: '#FFFF00', label: 'Etiqueta', title: 'Título', description: 'Descripción Descripción' },
    { color: '#ADFF2F', label: 'Etiqueta', title: 'Título', description: 'Descripción Descripción' },
    { color: '#00CED1', label: 'Etiqueta', title: 'Título', description: 'Descripción Descripción' },
    { color: '#1E90FF', label: 'Etiqueta', title: 'Título', description: 'Descripción Descripción' },
    { color: '#800080', label: 'Etiqueta', title: 'Título', description: 'Descripción Descripción' },
  ];

  constructor() { }

  ngOnInit() { }

}
