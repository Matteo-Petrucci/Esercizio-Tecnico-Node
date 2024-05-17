import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CITIES_MOCK } from 'src/app/model/cities';
import { CreaArticoloService } from 'src/app/service/crea-articolo.service';

@Component({
  selector: 'app-crea-articolo',
  templateUrl: './crea-articolo.component.html',
  styleUrls: ['./crea-articolo.component.scss']
})
export class CreaArticoloComponent implements OnInit {
  articoloForm!: FormGroup;
  cities = CITIES_MOCK;

  constructor (
    private fb: FormBuilder,
    public router: Router,
    private articoloService: CreaArticoloService,
    private snackBar: MatSnackBar,

  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.articoloForm = this.fb.group({
      lingua: ['IT', Validators.required],
      title: ['', [Validators.required, Validators.maxLength(15)]],
      subtitle: ['', Validators.maxLength(17)],
      description: ['', Validators.required],
      destinationID: ['', Validators.required],
      mediaImage: [null, Validators.required],
      paragraphs: this.fb.array([])
    });
  }

  get paragraphs() {
    return this.articoloForm.get('paragraphs') as FormArray;
  }

  addParagraph() {
    this.paragraphs.push(this.fb.group({
      paragraphTitle: ['', Validators.required],
      mediaImage: [null, Validators.required],
      paragraphText: ['', Validators.required],
      destinationID: ['', Validators.required]
    }));
  }

  resetForm() {
    this.articoloForm.reset();
    while (this.paragraphs.length) {
      this.paragraphs.removeAt(0);
    }
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const img = new Image();
      img.src = window.URL.createObjectURL(file);
      img.onload = () => {
        const width = img.width;
        const height = img.height; 
        if (width <= 1600 && height <= 1000) {
          console.log('File selezionato:', file);
        } else {
          console.log('Dimensioni non valide. Le dimensioni massime consentite sono 1600x1000.');
        }
      };
    }
  }
  
  onSubmit() {
    if (this.articoloForm.valid) {
      this.articoloService.salvaArticolo(this.articoloForm.value).subscribe(
        response => {
          console.log('Articolo creato con successo:', response);
          this.snackBar.open('Articolo creato con successo!', 'Chiudi', {
            duration: 3000,
            panelClass: ['success-snackbar']
          });
          this.router.navigate(['home']);
        },
        error => {
          console.error('Errore durante la creazione dell\'articolo:', error);
          this.snackBar.open('Errore: Articolo non creato!', 'Chiudi', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
        }
      );
    }
  }
}
