import { format } from "date-fns";
import { faIR } from "date-fns/locale";

export function formatDate(isoString) {
  return format(new Date(isoString), "yyyy/MM/dd - HH:mm", { locale: faIR });
}
