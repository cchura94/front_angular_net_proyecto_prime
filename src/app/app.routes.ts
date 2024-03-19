import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: '', loadChildren: () => import("./web/web.module").then(w => w.WebModule) },
    { path: 'auth', loadChildren: () => import("./auth/auth.module").then(au => au.AuthModule) },
    { path: 'admin', loadChildren: () => import("./admin/admin.module").then(ad => ad.AdminModule), canActivate: [authGuard] },
];
