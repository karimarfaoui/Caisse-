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
<<<<<<< HEAD
export const routes: Routes = [
    {path: '', component: HomeComponent},
    { path: 'article', component: ArticleComponent},
    { path: 'ecran', component: EcranComponent},
    { path: 'paiement', component: PaiementComponent},
    { path: 'commentaire', component: CommentaireComponent},
    { path: 'stock', component: StockComponent},
    { path: 'acces', component: AccesComponent},
    { path: 'lecture', component: LectureComponent},
    { path: 'cloture', component: ClotureComponent}
=======
import { PaiementComponent } from './pages/configuration/paiement/paiement.component';
import { ParametresComponent } from './pages/ficheParametre/parametres/parametres.component';
import { ClientComponent } from './pages/client/client.component';
import { PconnexionComponent } from './pages/ficheParametre/Pconnexion/pconnexion/pconnexion.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path:'paiement',component:PaiementComponent},
    {path:'article', component:ArticleComponent},
    {path:'ficheparametre', component:ParametresComponent},
    {path:'client', component:ClientComponent},
    {path:'parameterdeconnexion',component:PconnexionComponent},
>>>>>>> cb4526b93aa707e41f69a15785bdab4933ba41de
];
