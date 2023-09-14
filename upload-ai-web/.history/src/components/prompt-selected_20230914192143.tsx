import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select";

export function PromptSelected() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Selecione um prompt..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="title">Título do YouTube</SelectItem>
        <SelectItem value="description">Descrição do YouTube</SelectItem>
      </SelectContent>
    </Select>
  );
}
