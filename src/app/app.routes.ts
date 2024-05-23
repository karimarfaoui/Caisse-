import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EcranComponent } from './pages/ecran/ecran.component';
import { PaiementComponent } from './pages/paiement/paiement.component';
import { CommentaireComponent } from './pages/commentaire/commentaire.component';
import { StockComponent } from './pages/stock/stock.component';
import { AccesComponent } from './pages/acces/acces.component';
import { LectureComponent } from './pages/lecture/lecture.component';
import { ClotureComponent } from './pages/cloture/cloture.component';
import { ArticleComponent } from './pages/configuration/article/article.component';
import { ParametresComponent } from './pages/ficheParametre/parametres/parametres.component';
import { ClientComponent } from './pages/client/client.component';
import { PconnexionComponent } from './pages/ficheParametre/Pconnexion/pconnexion/pconnexion.component';
import { AuthGuard } from './@services/auth.guard';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    { path: 'article', component: ArticleComponent , canActivate: [AuthGuard]},
    { path: 'ecran', component: EcranComponent, canActivate: [AuthGuard]},
    { path: 'paiement', component: PaiementComponent, canActivate: [AuthGuard]},
    { path: 'commentaire', component: CommentaireComponent, canActivate: [AuthGuard]},
    { path: 'stock', component: StockComponent, canActivate: [AuthGuard]},
    { path: 'acces', component: AccesComponent, canActivate: [AuthGuard]},
    { path: 'lecture', component: LectureComponent, canActivate: [AuthGuard]},
    { path: 'cloture', component: ClotureComponent, canActivate: [AuthGuard]},


    {path:'ficheparametre', component:ParametresComponent, canActivate: [AuthGuard]},
    {path:'client', component:ClientComponent, canActivate: [AuthGuard]},
    {path:'parameterdeconnexion',component:PconnexionComponent, canActivate: [AuthGuard]}
];
