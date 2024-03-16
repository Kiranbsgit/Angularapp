import { CanActivateFn,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot } 
  from '@angular/router';
import { inject } from '@angular/core';
// import { session } from '../utilities/session';
// import { AuthService } from '../services/authservices/auth.service';
import { TokenService } from '../services/tokenServices/token.service';


export const adminAuthGaurd: CanActivateFn = (
  route : ActivatedRouteSnapshot,
  state : RouterStateSnapshot
  ) => {
    const router:Router =inject(Router);
    const tokenService = inject(TokenService);
    
    // let isLoggedIn=localStorage.getItem('accessToken');
    // if(!isLoggedIn){
    //   alert ("Not authenticated!! Please login.");
    //   router.navigate(['/login'])
    //   return false;
    // }
    const requiredRole = route.data['requiredRole'];

    // Check if the user has the required role
    if (requiredRole && tokenService.getUserRole() !== requiredRole) {
      alert("You don't have permission to access this page.");
      router.navigate(['/login']);
      return false;
    }
  
    
  
    return true
  }


  //let requiredRole=localStorage.getItem('userRole')