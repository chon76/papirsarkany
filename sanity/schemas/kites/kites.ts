import { defineField, defineType } from 'sanity';
import productFields from '../../productFields';

export default defineType({
  name: 'kites',
  type: 'document',
  title: 'Sárkányok',
  fields: [
    ...productFields,
    defineField({
      name: 'price',
      type: 'number',
      title: 'Ár',
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: 'size',
      type: 'string',
      title: 'Méret',
    }),
    defineField({
      name: 'materials',
      type: 'kiteMaterials',
      title: 'Anyagok',
    }),
    defineField({
      name: 'windSpeed',
      title: 'Szélerősség',
      type: 'string',
      options: {
        list: [
          'gyengétől a közepes szélig',
          'gyengétől az élénk szélig',
          'közepestől az élénk szélig',
        ],
      },
    }),
    defineField({
      name: 'isBeginner',
      type: 'boolean',
      title: 'Kezdő',
      description: '"Kezdőknek ajánlott!" felirat',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Leírás',
    }),
  ],
});