export type FieldType = 'text' | 'textarea';

export interface IFormMap {
	id: string;
	type: FieldType;
	label?: string;
}
