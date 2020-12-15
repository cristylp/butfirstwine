# butfirst.wine_
Final project - Ironhack

## Wine routes


Base URL en la API para los vinos es "http://localhost:3000/api/wines", y utiliza los siguientes endpoints:

  | Path        | Method           | Description  |
  | ------------- | ------------- | ------------- |
  | `/getAllWines`  | GET | Muestra todos los vinos existentes  |
  | `/getOneWine/:wine_id` | GET | Muestra los detalles de un vino  |
  | `/newWine` | GET | Formulario para crear un nuevo vino  |
  | `/newWine` | POST | Guarda el nuevo vino creado |
  | `/editWine/:wine_id` | PUT | Edita un vino ya creado  |
  | `/deleteWine/:wine_id` | GET | Elimina de la BBDD un vino  |
  
  
  
  
## Users routes


 Base URL en la API para los users es "http://localhost:3000/api", y utiliza los siguientes endpoints:

  | Path        | Method           | Description  |
  | ------------- | ------------- | ------------- |
  | `/signup` | POST | Crea en la BBDD un nuevo usuario  |
  | `/login` | POST | Login del usuario a su perfil  |
  | `/logout` | GET | Cierra la sesión del usuario  |
  | `/profile` | GET | Muestra al usuario su perfil  |
  | `/edit?user_id=xxx` | GET | Muestra el formulario para editar el perfil del usuario  |
  | `/edit?user_id=xxx` | POST | Edita en la BBDD el perfil del usuario |
  | `/delete?user_id=xxx` | POST | Borra de la BBDD un usuario |
  



