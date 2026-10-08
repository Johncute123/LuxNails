export interface ServiceCategory {
  id: string;
  title: string;
  note: string;
  description: string;
  items: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    "id": "manicure",
    "title": "Manicures & polish",
    "note": "A fresh start for your hands",
    "description": "Your everyday essentials, with a finish that feels like you.",
    "items": [
      "Manicure",
      "Gel manicure",
      "French manicure",
      "Nail painting & polish changes",
      "Nail cut & filing",
      "Polish removal"
    ]
  },
  {
    "id": "extensions",
    "title": "Extensions & nail art",
    "note": "Make them your own",
    "description": "Explore shape, length and colour, from understated to expressive.",
    "items": [
      "Acrylic nails",
      "Dip powder",
      "Nail extensions & sculpted nails",
      "Nail designs & decals",
      "Nail repair",
      "Synthetic nail removal"
    ]
  },
  {
    "id": "pedicure",
    "title": "Pedicures & massage",
    "note": "Take a little time out",
    "description": "A moment of care for hands, feet and beyond.",
    "items": [
      "Pedicure",
      "Foot massage",
      "Hand & foot massage",
      "Back massage",
      "Spa services"
    ]
  },
  {
    "id": "waxing",
    "title": "Waxing",
    "note": "The finishing details",
    "description": "Call the salon to discuss available waxing treatments and find the right option for your visit.",
    "items": []
  }
];
