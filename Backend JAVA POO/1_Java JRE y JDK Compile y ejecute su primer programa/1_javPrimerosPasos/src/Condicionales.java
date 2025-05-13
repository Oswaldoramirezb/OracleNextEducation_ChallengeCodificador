
public class Condicionales {

	public static void main(String[] args) {

		System.out.println("Hello"); // sysout + ctrl +space

		int edad = 28;

		if (edad >= 40)
			System.out.println("Puede entrar"); //sourse, format para dar formato
		System.out.println("No entra");
		
		//doble click en consola abajo se expande
		

		 int edad2 = 20;
	     int cantidadPersonas = 3;

	        if (edad2 >= 18) {
	            System.out.println("Tienes más de 18 años");
	            System.out.println("Bienvenido ");
	        } else {
	            if (cantidadPersonas >= 2) {
	                System.out.println("No tienes 18 años, pero puedes ingresar, porque estás acompañado");
	            } else {
	                System.out.println("Lamentablemente no puedes ingresar");
	            }
	        }
		
		
	}

}
