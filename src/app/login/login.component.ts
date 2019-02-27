// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';


// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit
// {
//   userName: string;
//   userPassword: string;
//   loginNSM: boolean;
//   loginRSM: boolean;
//   isShow: boolean;
//   isNsm: boolean;

//   constructor(private router: Router ) {
//    }

//   ngOnInit() {
//     this.loginNSM = true;
//   }

//   setUserType(userType: string) {
//      if (userType === "NSM")
//    {
//       this.isNsm = true;
//       console.log(this.isNsm);
//     }
//     else
//     {
//       this.isNsm = false;
//       console.log(this.isNsm);
//     }
//   }

//   onSubmit() {
//     if (this.isNsm)
//     {
//       console.log(this.userName);
//       console.log(this.userPassword);
//       if (this.userName === 'NsmUser' && this.userPassword === 'hari') {
//         // redirect to NSM screen
//         this.router.navigateByUrl('/nsm');
//       }
//     } else{
//       if (this.userName === 'RsmUser' && this.userPassword === 'hari')
//       {
//         // console.log(this.userName);
//         // console.log(this.userPassword);
//         // redirect to RSM screen
//         this.router.navigateByUrl('/rsm');
//       }
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators} from  './custom-validators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})  
export class LoginComponent {
  isNsm: boolean;
  public frmSignup: FormGroup;
  userEmail: string;
  userPassword: string;

  constructor(private fb: FormBuilder, private router:Router) {
    this.frmSignup = this.createSignupForm();

  }
  setUserType(userType: string) {
     if (userType === "NSM")
   {
      this.isNsm = true;
      console.log(this.isNsm);
    }
    else
    {
      this.isNsm = false;
      console.log(this.isNsm);
    }
  }
  submit(){
    if (this.isNsm)
    {
      console.log(this.userEmail);
      if (this.userEmail === 'NsmUser@gmail.com' && this.userPassword === 'Abc123$v9') {
        //         // redirect to NSM screen
        this.router.navigateByUrl('/nsm');
            } 
        else
        {
              if (this.userEmail === 'RsmUser@gmail.com' && this.userPassword === 'Def123$v9')
              {
        //         // console.log(this.userName);
        //         // console.log(this.userPassword);
        //         // redirect to RSM screen
                this.router.navigateByUrl('/rsm');
        //       }
        //     }
              }
            }
      
    }
    else{
      console.log('hi from rsm');
    this.router.navigateByUrl('/rsm');
  }
  }
  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        userType: ['', Validators.required],
        email: [
          null,
          Validators.compose([Validators.email, Validators.required])
        ],
        password: [
          null,
          Validators.compose([
            Validators.required,
            // check whether the entered password has a number
            CustomValidators.patternValidator(/\d/, {
              hasNumber: true
            }),
            // check whether the entered password has upper case letter
            CustomValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }),
            // check whether the entered password has a lower case letter
            CustomValidators.patternValidator(/[a-z]/, {
              hasSmallCase: true
            }),
            // check whether the entered password has a special character
            CustomValidators.patternValidator(
              /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
              {
                hasSpecialCharacters: true
              }
            ),
            Validators.minLength(8)
          ])
        ],
        // confirmPassword: [null, Validators.compose([Validators.required])]
        
      },
      {
        // check whether our password and confirm password match
        // validator: CustomValidators.passwordMatchValidator
      }
    );
  }

 
}