
public class ejemploScope {

	public static void main(String[] args) {
        System.out.println("probando condicionales ");

        int edad = 19;
        int cantidadPersonas = 1;
        boolean acompañado = cantidadPersonas >= 2;
        boolean puedeEntrar= edad >=18 && acompañado;
        //todo booblean por defecto es false
        

        if (puedeEntrar) {
            System.out.println("Bienvenido"); 
        } else {
            System.out.println("Lamentablemente no puedes ingresar");
        }
    }
	
}


/*


public class TestDescuento {

    public static void main(String[] args) {

        double valorCompra = 250.0;
        double descuento = 0.0;

        if (valorCompra >= 100.0 && valorCompra < 200.0) {
            descuento = 10.0;
        } else if (valorCompra >= 200.0 && valorCompra < 300.0) {
            descuento = 15.0;
        } else if (valorCompra >= 300.0) {
            descuento = 20.0;
        }

        double valorFinal = valorCompra - (valorCompra * (descuento / 100));

        System.out.println("Valor de la compra: $" + valorCompra);
        System.out.println("Descuento: " + descuento + "%");
        System.out.println("Valor final: $" + valorFinal);
    }
}
**********************************************

public class TestAlcance {

    public static void main (String [] args) {
        System.out.println ("pruebas condicionales");

        int edad = 20;
        int cantidadPersonas = 3;
        boolean acompañado;

        if (cantidadPersonas >= 2) {
            acompañado = true;
        } else {
            acompañado = false;
        }

        if (edad >= 18 || acompañado) {
            System.out.println ("Bienvenido");
        } else {
            System.out.println ("desafortunadamente no puedes ingresar");
        }
    }
}


*************************************************

public class TestMes {

    public static void main (String[] args) {

        int mes = 13;

        switch (mes) {
            case 1:
                System.out.println ("El mes es enero");
                break;
            case 2:
                System.out.println ("El mes es febrero");
                break;
            case 3:
                System.out.println ("El mes es marzo");
                break;
            case 4:
                System.out.println ("El mes es abril");
                break;
            case 5:
                System.out.println ("El mes es mayo");
                break;
            case 6:
                System.out.println ("El mes es junio");
                break;
            case 7:
                System.out.println ("El mes es julio");
                break;
            case 8:
                System.out.println ("El mes es agosto");
                break;
            case 9:
                System.out.println ("El mes es septiembre");
                break;
            case 10:
                System.out.println ("El mes es octubre");
                break;
            case 11:
                System.out.println ("El mes es noviembre");
                break;
            case 12:
                System.out.println ("El mes es diciembre");
                break;
            default:
                System.out.println ("Mes inválido");
                break;
        }
    }
}







*/