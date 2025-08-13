import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, FooterComponent],
})
export class HomePage {
  paises = [
    {
      nombre: 'Japón',
      imagen: 'assets/img/japon.jpg',
      descripcion: 'Reconocido por su rica cultura, templos antiguos y tecnología avanzada.'
    },
    {
      nombre: 'Italia',
      imagen: 'assets/img/italia.jpg',
      descripcion: 'Famosa por su gastronomía, arte renacentista y arquitectura histórica.'
    },
    {
      nombre: 'Egipto',
      imagen: 'assets/img/egipto.jpg',
      descripcion: 'Conocido por sus pirámides, historia faraónica y el río Nilo.'
    },
    {
      nombre: 'Australia',
      imagen: 'assets/img/australia.jpg',
      descripcion: 'Reconocida por sus playas, la Gran Barrera de Coral y vida silvestre única.'
    },
    {
      nombre: 'Colombia',
      imagen: 'assets/img/colombia.jpg',
      descripcion: 'Famosa por su café, biodiversidad y paisajes impresionantes.'
    }
  ];
}
