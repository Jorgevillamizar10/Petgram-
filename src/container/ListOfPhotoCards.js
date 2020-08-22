import { withPhotos } from "../hoc/withPhotos";
import { ListOfPhotoCardsComponent } from "../components/ListOfPhotoCards/index";

//ListOfPhotoCards -> va a ser el resultado de ejecutar este withPhotos que le pasamos como parametro el componente que le queremos inyectar por props los datos
export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent);
