import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { marker } from '../shared/marker.model';

@Injectable({
  providedIn: 'root'
})
export class MarkersService {
  markers: marker[] = [
    {
      animation: 'bounce',
      draggable: false,
      lat: 49.220,
      lng: -122.773,
      opacity: 1,
      title: 'Florist',
      label: 'F',
      description: `It's most common to call the owner or manager of a flower 
        shop a florist, although the word is also used to mean a person who grows 
        flowers meant for cutting. Whether you're buying flowers for a sick friend 
        or planning the bouquets for a wedding, a florist is the person you should consult.`,
      descriptionSource: 'Vocabulary.com'
    },
    {
      draggable: true,
      lat: 49.204,
      lng: -122.836,
      opacity: 0.63,
      title: 'Resort',
      description: `A resort is a self-contained commercial establishment that tries to 
        provide most of a vacationer's wants, such as food, drink, lodging, sports, 
        entertainment, and shopping, on the premises.`,
      descriptionSource: 'Wikipedia.com'
    },
    {
      animation: 'drop',
      draggable: true,
      lat: 49.191,
      lng: -122.762,
      title: 'Nursery',
      description: `Nursery, place where plants are grown for transplanting, for use as stock
        for budding and grafting, or for sale. Commercial nurseries produce and distribute 
        woody and herbaceous plants, including ornamental trees, shrubs, and bulb crops. 
        While most nursery-grown plants are ornamental, the nursery business also includes 
        fruit plants and certain perennial vegetables used in home gardens (e.g., asparagus, rhubarb). 
        Some nurseries are kept for the propagation of native plants for ecological restoration. 
        Greenhouses may be used for tender plants or to keep production going year round, 
        but nurseries most commonly consist of shaded or exposed areas outside. Plants are 
        commonly cultivated from seed or from cuttings and are often grown in pots or other 
        temporary containers.`,
      descriptionSource: 'Britannica.com'
    },
    {
      draggable: true,
      lat: 49.248,
      lng: -122.797,
      opacity: 1,
      title: 'Auto Repair',
      descriptionSource: 'Wikipedia.com',
      description: `An automobile repair shop (also known regionally as a garage or a workshop) 
        is an establishment where automobiles are repaired by auto mechanics and technicians.`
    },
    {
      animation: 'drop',
      draggable: false,
      label: 'B',
      lat: 49.213,
      title: 'Bank',
      lng: -122.673,
      description: `Bank, an institution that deals in money and its substitutes and provides 
        other money-related services. In its role as a financial intermediary, a bank accepts 
        deposits and makes loans. It derives a profit from the difference between the costs 
        (including interest payments) of attracting and servicing deposits and the income it 
        receives through interest charged to borrowers or earned through securities.`,
      descriptionSource: 'Britannica.com'
    },
    {
      draggable: true,
      lat: 49.180,
      lng: -122.823,
      opacity: 1,
      title: 'Outlet',
      label: 'O',
      description: `An outlet store, factory outlet or factory shop is a brick and mortar 
        or online store in which manufacturers sell their stock directly to the public. 
        Traditionally, a factory outlet was a store attached to a factory or warehouse, 
        sometimes allowing customers to watch the production process such as in the original 
        L.L. Bean store. In modern usage, outlet stores are typically manufacturer-branded 
        stores such as Gap or Bon Worth grouped together in outlet malls.`,
      descriptionSource: 'Wikipedia.com'
    },
    {
      animation: 'bounce',
      draggable: false,
      lat: 49.294,
      lng: -122.741,
      opacity: 1,
      title: 'Barber Shop',
      label: 'BS',
      description: `The most common customer at a barbershop is a man who wants a 
        quick haircut and possibly a beard trim or shave as well.`,
      descriptionSource: 'Vocabulary.com'
    },
    {
      draggable: false,
      lat: 49.264,
      lng: -122.944,
      opacity: 1,
      title: 'Bazaar',
      label: 'Z',
      description: `A bazaar is a market that has rows and rows of little 
      shops selling miscellaneous stuff — like tube socks, velvet paintings, 
      and corn on the cob.`,
      descriptionSource: 'Vocabulary.com'
    },
    {
      animation: 'drop',
      draggable: false,
      lat: 49.138,
      lng: -122.913,
      opacity: 1,
      title: 'Circus',
      label: 'C',
      description: `Circus, an entertainment or spectacle usually consisting of trained 
        animal acts and exhibitions of human skill and daring. The ring may be enclosed 
        in an arena, in a building designed for circus performances, or in a tent, and 
        it is generally surrounded by tiers of seats for spectators.`,
      descriptionSource: 'Britannica.com'
    },
    {
      draggable: false,
      lat: 49.218,
      lng: -122.626,
      title: 'Candy Shop',
      label: 'C',
      description: `A shop solely or largely selling confectionery. You get all 
        kinds of candies here.`
    },
    {
      animation: 'bounce',
      draggable: true,
      lat: 49.174,
      lng: -122.678,
      title: 'Hardware Store',
      label: 'H',
      description: `A store selling tools, implements, and other items used in home life and 
        activities such as gardening.`,
      descriptionSource: 'Google.com'
    },
    {
      animation: 'bounce',
      draggable: false,
      lat: 49.191,
      lng: -122.906,
      opacity: 0.77,
      title: 'Pharmacy',
      label: 'P',
      description: `Pharmacy, the science and art concerned with the preparation and 
        standardization of drugs. Its scope includes the cultivation of plants that are used 
        as drugs, the synthesis of chemical compounds of medicinal value, and the analysis of 
        medicinal agents. Pharmacists are responsible for the preparation of the dosage forms 
        of drugs, such as tablets, capsules, and sterile solutions for injection.`,
      descriptionSource: 'Britannica.com'
    },
    {
      animation: 'drop',
      draggable: true,
      lat: 49.196,
      lng: -122.849,
      opacity: 0.91,
      title: 'Boutique',
      description: `A boutique is a small shop, especially one that sells women's clothes 
        and jewelry. If you like to shop, you probably love going to all the little boutiques 
        downtown.`,
      descriptionSource: 'Vocabulary.com'
    },
    {
      draggable: false,
      lat: 49.260,
      lng: -122.963,
      opacity: 1,
      title: 'Pawn Shop',
      description: ` Business of advancing loans to customers who have pledged household 
        goods or personal effects as security on the loans.`,
      descriptionSource: 'Britannica.com'
    },
    {
      description: `A library is a place where collections of books are kept. If you ever want 
        a reminder of how very much there is to learn in this world, pay a visit to your local 
        library.`,
      descriptionSource: 'Vocabulary.com',
      draggable: false,
      lat: 49.279,
      lng: -122.798,
      opacity: 1,
      title: 'Library',
      label: 'L'
    }
  ];

  constructor() { }

  getMarkers() {
    return of(this.markers);
  }
}
