import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, FooterComponent],
})
export class FormularioPage {
  usuario = {
    nombre: '',
    correo: '',
    mensaje: ''
  };

  datosEnviados = false;

  enviarFormulario() {
    if (this.usuario.nombre && this.usuario.correo && this.usuario.mensaje) {
      this.datosEnviados = true;
    } else {
      alert('Por favor complete todos los campos.');
    }
  }
}
