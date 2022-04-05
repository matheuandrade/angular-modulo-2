import { AuthService } from './../../core/auth/auth.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private platformService: PlatformDetectorService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(){
    const { userName, password } = this.loginForm.value
    this.authService.authenticate(userName, password)
                    .subscribe(
                      (success: any) => {
                        console.log('success', success)
                        // this.router.navigateByUrl(`user/${userName}`)
                        this.router.navigate(['user', userName])
                      },
                      (error: any) => {
                        console.log('error', error)
                        this.loginForm.reset()
                        if(this.platformService.isPlatformBrowser()){
                          this.userNameInput.nativeElement.focus()
                        }
                      })
  }



}
