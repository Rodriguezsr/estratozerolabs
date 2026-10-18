
/* Estrato Zero Labs - Supabase Auth */

const SUPABASE_URL = "https://defrfpzalpjnuzwdensm.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_c-2om_sWEIYxKApUwy6BBQ_xg3WtFVV";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

// REGISTRO
async function registrarUsuario(nombre, apellido, email, password) {
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: nombre,
        last_name: apellido
      },
      emailRedirectTo: window.location.href.split("#")[0]
    }
  });

  if (error) {
    alert("Error al registrarte: " + error.message);
    return;
  }

  alert(
    data.session
      ? "¡Cuenta creada correctamente!"
      : "Revisa tu correo para confirmar tu cuenta."
  );
}

// INICIAR SESIÓN
async function iniciarSesion(email, password) {
  const { data, error } =
    await supabaseClient.auth.signInWithPassword({
      email,
      password
    });

  if (error) {
    alert("Error al iniciar sesión: " + error.message);
    return;
  }

  alert("¡Bienvenido! Sesión iniciada correctamente.");
  return data.user;
}

// SOLICITAR RESTABLECIMIENTO
async function recuperarContrasena(email) {
  const { error } =
    await supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.href.split("#")[0]
    });

  if (error) {
    alert("Error: " + error.message);
    return;
  }

  alert(
    "Si existe una cuenta con ese correo, recibirás instrucciones para recuperar tu contraseña."
  );
}

// GUARDAR NUEVA CONTRASEÑA
async function cambiarContrasena(nuevaContrasena) {
  if (nuevaContrasena.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres.");
    return;
  }

  const { error } = await supabaseClient.auth.updateUser({
    password: nuevaContrasena
  });

  if (error) {
    alert("No se pudo cambiar la contraseña: " + error.message);
    return;
  }

  alert("¡Contraseña actualizada correctamente!");
}

// Disponible para conectar los formularios HTML.
window.registrarUsuario = registrarUsuario;
window.iniciarSesion = iniciarSesion;
window.recuperarContrasena = recuperarContrasena;
window.cambiarContrasena = cambiarContrasena;

