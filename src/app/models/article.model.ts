export interface Article{
    
    code_pro: string;
    designiation: string; 
    group: string;
    sous_group: string;
    famille: string;
    sous_famille: string;
    prix_vente: number;
    prix_vente_1: number;
    commentaire: string;
    tva: number;
    imprimenter:string;
    prix_libre: boolean;
    cont_dec_auto: boolean;
    prix_0_auto: boolean;
    fidelite: boolean;
    validation: boolean;
    stock: boolean;
    personnel_auto: boolean;
    article_gratuit: boolean;
    Stock: number;
    entre: number;
    sortie: number;
}