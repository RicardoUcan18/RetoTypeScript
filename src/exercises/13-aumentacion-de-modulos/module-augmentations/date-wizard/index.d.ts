// Esto habilita el modo de aumento de módulos.
import 'date-wizard';

declare module 'date-wizard' {
    // Agrega tus extensiones de módulo aquí.

    interface DateDetails {
      hours: number;
      minutes: number;
      seconds: number;
    }

    
    function pad(value: string | number): string;     
}
