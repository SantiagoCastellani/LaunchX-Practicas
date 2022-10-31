# Abogabot - LaunchX/Práctica 1

## ***Diseño de la aplicación***

## Decripción

Es una aplicación de un despacho de abogados para automatizar las demandas de sus clientes, y poder gestionarlas a través de un formulario.
Los clientes pueden crear nuevas demandas y seguir el estado de dichas demandas.

## Experiencia de usuario

- Al momento de llenar el formulario se manda al proceso de pago para finalizar la transacción.
- Para dar seguimiento a su demanda, el cliente crea una cuenta en la plataforma y verá el seguimiento de cada una de las actualizaciones del proceso legal.
- El administrador del sitio recbe la notificación de una nueva demanda y con los datos llenados del formulario se crea automaticamente el documento legal en formato word para empezar el proceso.
- El administrador recibe el pago y debe de ser capaz de verlo en un dashboard para ver la cantidad de ingresos recibidos.
- El administrador actualiza el proceso de la demanda y agrega comentarios en cada paso del proceso.
- Al usuario le llegan correos de notificación para saber el avance de su proceso.
- La página debe de ser responsive para poderla ver desde el celular.
- La preferncia de colores del cliente es azul marino y blanco, pero acepta propuestas.

## Análisis de requerimentos

- Login de registro e inicio de sesión.
- Roles de usuario o administrador.
- Página responsive.

##### ***Rol USUARIO***

- El usuario puede registrar una demanda, llenado un formulario, con la descripción de la demanda y sus datos personales. REGISTRO
- El usuario accede a un formulario de pago, para poder comenzar a pagar los servicios del estudio. PAGO
- El cliente puede tener seguimiento en todo momento del estado Y actualización de la demanda. VER DEMANDAS
- El cliente recibe notificaciones acerca de cambios en el proceso de la demanda. RECIBIR ACTUALIZACIONES

##### ***Rol ADMINISTRADOR***

- El administrador recibe una notificación cuando se crea una nueva demanda.RECIBIR NUEVA DEMANDA
- Con la crecaión de la demanda se crea automaticamente un documento en formato Word con los datos del formulario.
- El administrador recibe una notificación cuando se paga una parte de la demanda, y puede visualizar los ingresos percibidos.RECIBIR PAGOS
- El administrador accede al estado de todas las demandas.VER DEMANDAS
- El administrador puede actualizar el estado de las demandas, y agregar comentarios.ACTUALIZACION DE DEMANDAS, ENVIAR COMENTARIO

##### ***Observaciones***

- La preferencia de colores del cliente es azul marino y blanco, abierto a nuevas propuestas.


## Buyer Persona

![Ver Imangen Buyer persona](./img/buyer-persona.jpg)

## Público objetivo

![Ver Imagen publico objetivo](/img/publico-objetivo.jpg)


## Wireframe - Diagrama de flujos

![Ver diagrama](/img/diagrama.jpg)


## Diseño UI

(En la PC con la que estoy trabajando, no pude correr favorablemente el figma u otro programa de diseño, por lo que hice una maqueta en HTML y tomé capturas...)

- Home Page

![Honme Page](/img/UI/home.jpg)

- Login Page

![Login Page](/img/UI/login.png)

- Abogado Page

![Abogado Page](/img/UI/abogado.png)

