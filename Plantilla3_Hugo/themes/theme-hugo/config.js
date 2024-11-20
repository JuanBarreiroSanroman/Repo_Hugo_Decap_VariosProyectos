import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        label: "Página principal",
        name: "order_home",
        path: "/themes/theme-hugo/data/order_home/",
        format: "yaml",
        fields: [
          {
            name: "order",
            label: "Secciones",
            type: "object",
            list: true,
            itemProps: (item) => ({
              label: item.nombre ? `Sección: ${item.nombre}` : null,
            }),
            fields: [
              {
                type: "string",
                name: "seccion",
                label: "Identificador de la sección",
              },
              {
                type: "string",
                name: "nombre",
                label: "Nombre de la sección",
              },
              {
                type: "boolean",
                name: "enable",
                label: "Habilitar sección",
              },
            ],
          },
        ],
      },
      {
        label: "Vehículos",
        name: "vehiculos",
        path: "/themes/theme-hugo/content/vehiculos",
        format: "md",
        fields: [
          {
            name: "title",
            label: "Título",
            type: "string",
          },
          {
            name: "Model",
            label: "Modelo",
            type: "string",
          },
          {
            name: "Brand",
            label: "Marca",
            type: "string",
          },
          {
            name: "Version",
            label: "Versión",
            type: "string",
          },
          {
            name: "engine_type",
            label: "Tipo de Motor",
            type: "string",
          },
          {
            name: "Spot_price",
            label: "Precio de Lista",
            type: "string",
          },
          {
            name: "Financed_price",
            label: "Precio Financiado",
            type: "string",
          },
          {
            name: "fuel",
            label: "Combustible",
            type: "string",
          },
          {
            name: "url_1",
            label: "Imagen",
            type: "string",
          },
          {
            name: "engine",
            label: "Motor",
            type: "string",
          },
          {
            name: "payload",
            label: "Carga Útil",
            type: "string",
          },
          {
            name: "acceleration",
            label: "Aceleración",
            type: "string",
          },
          {
            name: "gearbox_type",
            label: "Tipo de Transmisión",
            type: "string",
          },
          {
            name: "total_length",
            label: "Longitud Total",
            type: "string",
          },
          {
            name: "maximum_power",
            label: "Potencia Máxima",
            type: "string",
          },
          {
            name: "maximum_torque",
            label: "Par Máximo",
            type: "string",
          },
          {
            name: "displacement_cm3",
            label: "Cilindrada (cm³)",
            type: "string",
          },
          {
            name: "number_of_places",
            label: "Número de Plazas",
            type: "string",
          },
          {
            name: "number_of_speeds",
            label: "Número de Velocidades",
            type: "string",
          },
          {
            name: "approval_protocol",
            label: "Protocolo de Aprobación",
            type: "string",
          },
          {
            name: "total_curb_weight",
            label: "Peso Total",
            type: "string",
          },
          {
            name: "fuel_tank_capacity",
            label: "Capacidad del Depósito",
            type: "string",
          },
          {
            name: "maximum_speed_km_h",
            label: "Velocidad Máxima (km/h)",
            type: "string",
          },
          {
            name: "number_of_cylinders",
            label: "Número de Cilindros",
            type: "string",
          },
          {
            name: "energy_classification",
            label: "Clasificación Energética",
            type: "string",
          },
          {
            name: "maximum_trunk_volume_dm3",
            label: "Volumen Máximo del Maletero (dm³)",
            type: "string",
          },
          {
            name: "minimum_trunk_volume_dm3",
            label: "Volumen Mínimo del Maletero (dm³)",
            type: "string",
          },
          {
            name: "maximum_authorized_weight",
            label: "Peso Máximo Autorizado",
            type: "string",
          },
          {
            name: "curb_weight_in_running_order",
            label: "Peso en Orden de Marcha",
            type: "string",
          },
          {
            name: "maximum_towable_weight_with_brake",
            label: "Peso Remolcable Máximo con Freno",
            type: "string",
          },
          {
            name: "maximum_towable_weight_without_brake",
            label: "Peso Remolcable Máximo sin Freno",
            type: "string",
          },
        ],
      },
      {
        label: "Barra de Navegación",
        name: "barra_navegacion",
        path: "/themes/theme-hugo/data/nav/",
        format: "yaml",
        fields: [
          {
            name: "menu",
            label: "Menú Principal",
            type: "object",
            list: true,
            itemProps: (item) => ({
              label: item.name ? `Sección: ${item.name}` : null,
            }),
            fields: [
              {
                name: "name",
                label: "Nombre",
                type: "string",
              },
              {
                name: "identifier",
                label: "Identificador (Único)",
                type: "string",
              },
              {
                name: "url",
                label: "URL",
                type: "string",
              },
            ],
          },
        ],
      },
      {
        label: "Pie de Página",
        name: "footer",
        path: "/themes/theme-hugo/data/footer/",
        format: "yaml",
        fields: [
          {
            name: "about_us",
            label: "Acerca de nosotros",
            type: "rich-text",
            description: "Texto que describe tu taller mecánico.",
          },
          {
            name: "address",
            label: "Dirección",
            type: "rich-text",
            description: "Información de contacto y dirección de tu taller.",
          },
          {
            name: "copyright",
            label: "Copyright",
            type: "rich-text",
            description: "Información de derechos de autor.",
          },
        ],
      },
      {
        label: "Galería de imágenes",
        name: "carousel",
        path: "/themes/theme-hugo/content/carousel",
        format: "md",
        fields: [
          {
            name: "title",
            label: "Título",
            type: "string",
          },
          {
            name: "description",
            label: "Descripción",
            type: "rich-text",
          },
          {
            name: "image",
            label: "Imagen",
            type: "image",
          },
        ],
      },
      {
        label: "Acción personalizada",
        name: "call_to_action",
        path: "/themes/theme-hugo/data/call_to_action/",
        format: "yaml",
        fields: [
          {
            name: "enable",
            label: "Habilitar",
            type: "boolean",
          },
          {
            name: "icon",
            label: "Icono (Font Awesome)",
            type: "string",
          },
          {
            name: "title",
            label: "Título",
            type: "string",
          },
          {
            name: "subtitle",
            label: "Subtítulo",
            type: "string",
          },
          {
            name: "contact_email",
            label: "Correo de Contacto",
            type: "string",
          },
          {
            name: "contact_phone",
            label: "Teléfono de Contacto",
            type: "string",
          },
        ],
      },
      {
        label: "Promociones",
        name: "promociones",
        path: "/themes/theme-hugo/content/promociones",
        format: "md",
        fields: [
          {
            name: "title",
            label: "Título",
            type: "string",
          },
          {
            name: "icon",
            label: "Icono (Font Awesome)",
            type: "string",
          },
          {
            name: "description",
            label: "Descripción",
            type: "string",
          },
        ],
      },
      {
        label: "Servicios",
        name: "servicios",
        path: "content/servicios",
        format: "md",
        fields: [
          {
            name: "title",
            label: "Título",
            type: "string",
          },
          {
            name: "icon",
            label: "Icono (Font Awesome)",
            type: "string",
          },
          {
            name: "description",
            label: "Descripción",
            type: "string",
          },
        ],
      },
      {
        label: "Noticias / Blog",
        name: "blog",
        path: "/themes/theme-hugo/content/blog",
        format: "md",
        fields: [
          {
            name: "title",
            label: "Título",
            type: "string",
          },
          {
            name: "date",
            label: "Fecha de Creación",
            type: "datetime",
          },
          {
            name: "tags",
            label: "Etiquetas",
            type: "object",
            list: true,
            itemProps: (item) => ({
              label: item.tag,
            }),
            fields: [
              {
                name: "tag",
                label: "Etiqueta",
                type: "string",
              },
            ],
          },
          {
            name: "categories",
            label: "Categorías",
            type: "object",
            list: true,
            itemProps: (item) => ({
              label: item.category,
            }),
            fields: [
              {
                name: "category",
                label: "Categoría",
                type: "string",
              },
            ],
          },
          {
            name: "banner",
            label: "Banner",
            type: "image",
          },
          {
            name: "body",
            label: "Contenido",
            type: "rich-text",
            isBody: true,
          },
        ],
      },
      {
        label: "Clientes",
        name: "clientes",
        path: "/themes/theme-hugo/content/clientes",
        format: "md",
        fields: [
          {
            name: "name",
            label: "Nombre",
            type: "string",
          },
          {
            name: "image",
            label: "Imagen",
            type: "image",
          },
          {
            name: "url",
            label: "Página Web",
            type: "string",
          },
        ],
      },
    ],
  },
});
