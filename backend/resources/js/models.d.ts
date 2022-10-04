/**
 * This file is auto generated using 'php artisan typescript:generate'
 *
 * Changes to this file will be lost when the command is run again
 */

declare namespace App.Code {
    export interface BaseModel {}

}

declare namespace App.Models.Base {












}

declare namespace App.Models {
    export interface Espece {
        code: string;
        nom: string;
        nom_latin: string;
        code_photo_minia_adulte: string | null;
        code_photo_minia_larve: string | null;
        code_photo_adulte: string | null;
        code_photo_larve: string | null;
        taxo_ordre_markdown: string | null;
        taxo_familles_markdown: string | null;
        taxo_sous_familles_markdown: string | null;
        taxo_especes_markdown: string | null;
        taxo_complement_markdown: string | null;
        morphologie_markdown: string | null;
        bio_espece_principal: string | null;
        bio_espece_markdown: string | null;
        bio_reproduction_markdown: string | null;
        bio_develop_rapide_markdown: string | null;
        bio_deplacement_adulte_markdown: string | null;
        bio_vol_adulte_markdown: string | null;
        bio_detail_develop_markdown: string | null;
        bio_degat_cible_markdown: string | null;
        code_photo_bio_degat: string | null;
        lutte_surveillance_markdown: string | null;
        lutte_preventive_markdown: string | null;
        lutte_curative_markdown: string | null;
        status: string;
        created_at: string | null;
        updated_at: string | null;
        codePhotoMiniaAdulte?: App.Models.Photo | null;
        codePhotoMiniaLarve?: App.Models.Photo | null;
        codePhotoAdulte?: App.Models.Photo | null;
        codePhotoLarve?: App.Models.Photo | null;
        codePhotoBioDegat?: App.Models.Photo | null;
        photos?: Array<App.Models.Photo> | null;
        morphologieProch?: App.Models.MorphologieProch | null;
        resultatsWhereCodeEspece1?: Array<App.Models.Resultat> | null;
        resultatsWhereCodeEspece2?: Array<App.Models.Resultat> | null;
        photos_count?: number | null;
        resultatsWhereCodeEspece1_count?: number | null;
        resultatsWhereCodeEspece2_count?: number | null;
    }

    export interface MorphologieProch {
        code_espece: string;
        code_espece_proche: string;
        created_at: string | null;
        updated_at: string | null;
        codeEspece?: App.Models.Espece | null;
        codeEspeceProche?: App.Models.Espece | null;
    }

    export interface MotCle {
        code: string;
        libelle: string;
        code_photo: string | null;
        created_at: string | null;
        updated_at: string | null;
        codePhoto?: App.Models.Photo | null;
    }

    export interface PartagePhoto {
        meta_json: Array<any> | any;
        photo_base64: string;
        created_at: string | null;
        updated_at: string | null;
    }

    export interface PersonalAccessToken {
        id: number;
        tokenable_type: string;
        tokenable_id: number;
        name: string;
        token: string;
        abilities: string | null;
        last_used_at: string | null;
        created_at: string | null;
        updated_at: string | null;
    }

    export interface Photo {
        code: string;
        nom_fichier: string;
        source_markdown: string;
        created_at: string | null;
        updated_at: string | null;
        especesWhereCodePhotoMiniaAdulte?: Array<App.Models.Espece> | null;
        especesWhereCodePhotoMiniaLarve?: Array<App.Models.Espece> | null;
        especesWhereCodePhotoAdulte?: Array<App.Models.Espece> | null;
        especesWhereCodePhotoLarve?: Array<App.Models.Espece> | null;
        especesWhereCodePhotoBioDegat?: Array<App.Models.Espece> | null;
        especes?: Array<App.Models.Espece> | null;
        motClesWhereCodePhoto?: Array<App.Models.MotCle> | null;
        resultatsWhereCodePhoto?: Array<App.Models.Resultat> | null;
        reponsesWhereCodePhoto?: Array<App.Models.Reponse> | null;
        schemasWhereCodePhoto?: Array<App.Models.Schema> | null;
        especesWhereCodePhotoMiniaAdulte_count?: number | null;
        especesWhereCodePhotoMiniaLarve_count?: number | null;
        especesWhereCodePhotoAdulte_count?: number | null;
        especesWhereCodePhotoLarve_count?: number | null;
        especesWhereCodePhotoBioDegat_count?: number | null;
        especes_count?: number | null;
        motClesWhereCodePhoto_count?: number | null;
        resultatsWhereCodePhoto_count?: number | null;
        reponsesWhereCodePhoto_count?: number | null;
        schemasWhereCodePhoto_count?: number | null;
    }

    export interface PhotothequeEspece {
        code_espece: string;
        code_photo: string | null;
        photo_markdown: string | null;
        created_at: string | null;
        updated_at: string | null;
        codeEspece?: App.Models.Espece | null;
        codePhoto?: App.Models.Photo | null;
    }

    export interface Question {
        code: string;
        option_jrp: boolean;
        code_reponse_1: string | null;
        code_reponse_2: string | null;
        created_at: string | null;
        updated_at: string | null;
        codeReponse1?: App.Models.Reponse | null;
        codeReponse2?: App.Models.Reponse | null;
    }

    export interface Reponse {
        code: string;
        libelle_markdown: string;
        code_question_enfant: string | null;
        code_resultat: string | null;
        code_photo: string;
        created_at: string | null;
        updated_at: string | null;
        codeResultat?: App.Models.Resultat | null;
        codePhoto?: App.Models.Photo | null;
        questionsWhereCodeReponse1?: Array<App.Models.Question> | null;
        questionsWhereCodeReponse2?: Array<App.Models.Question> | null;
        questionsWhereCodeReponse1_count?: number | null;
        questionsWhereCodeReponse2_count?: number | null;
    }

    export interface Resultat {
        code: string;
        code_espece_1: string;
        code_espece_2: string | null;
        code_photo: string | null;
        created_at: string | null;
        updated_at: string | null;
        codeEspece1?: App.Models.Espece | null;
        codeEspece2?: App.Models.Espece | null;
        codePhoto?: App.Models.Photo | null;
        reponsesWhereCodeResultat?: Array<App.Models.Reponse> | null;
        reponsesWhereCodeResultat_count?: number | null;
    }

    export interface Schema {
        code: string;
        libelle: string;
        code_photo: string;
        created_at: string | null;
        updated_at: string | null;
        codePhoto?: App.Models.Photo | null;
    }

    export interface Texte {
        code: string;
        markdown: string;
        created_at: string | null;
        updated_at: string | null;
    }

    export interface textes {
        code: string;
        markdown: string;
        created_at: string | null;
        updated_at: string | null;
    }

}
