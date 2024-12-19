export function formatDate(dateString) {
    const date = new Date(dateString);
  
    return new Intl.DateTimeFormat('es-ES', {
      weekday: 'long',
      day: 'numeric',  
      month: 'long',  
      year: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric', 
    }).format(date);
  }
  
