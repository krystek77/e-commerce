const data = [
  {
    _id: 1,
    url: 'urzadzenia-pralnicze',
    label: 'Urządzenia',
    categories: [
        { _id: 1, url: 'pralnice', label: 'Pralnice' },
        { _id: 2, url: 'pralnicowirowki', label: 'Pralnicowirowki' },
        { _id: 3, url: 'prasownice', label: 'Prasownice' },
        { _id: 4, url: 'suszarki', label: 'Suszarki' },
        { _id: 5, url: 'wirowki', label: 'wirowki' },
        { _id: 6, url: 'bariery-higieny', label: 'Bariery Higieny' },
        { _id: 7, url: 'male-profesjonalne-pralnicowirowki', label: 'Małe profesjonalne pralnicowirówki' },
        { _id: 8, url: 'male-profesjonalne-suszarki', label: 'Małe profesjonalne suszarki' },
        { _id: 9, url: 'male-profesjonalne-zestawy-pralnicowirowka-suszarka', label: 'Małe profesjonalne zestawy pralko - suszarka' },
        { _id: 10, url: 'male-profesjonalne-zestawy-suszarko-suszarka', label: 'Małe profesjonalne zestawy suszarko - suszarka' },
        { _id: 11, url: 'prasowanie-fasonowe', label: 'Prasowanie fasonowe' },
    ],
  },
  {
    _id: 2,
    url: 'urzadzenia-pralnicze-samoobslugowe',
    label: 'Urządzenia samoobsługowe',
    categories: [
        { _id: 1, url: 'pralnicowirowki', label: 'Pralnicowirowki' },
        { _id: 2, url: 'suszarki', label: 'Suszarki' },
        { _id: 3, url: 'male-profesjonalne-pralnicowirowki', label: 'Małe profesjonalne pralnicowirówki' },
        { _id: 4, url: 'male-profesjonalne-suszarki', label: 'Małe profesjonalne suszarki' },
        { _id: 5, url: 'male-profesjonalne-zestawy-pralnicowirowka-suszarka', label: 'Małe profesjonalne zestawy pralko - suszarka' },
        { _id: 6, url: 'male-profesjonalne-zestawy-suszarko-suszarka', label: 'Małe profesjonalne zestawy suszarko - suszarka' },
        { _id: 7, url: 'prasownice-walcowe', label: 'Prasownice walcowe' },
    ],
  },
  { _id: 3, url: 'czesci', label: 'Części', categories: [] },
  { _id: 4, url: 'warsztat', label: 'Warsztat', categories: [
    { _id: 1, url: 'konserwacja', label: 'Konserwacja' },
    { _id: 2, url: 'narzedzia', label: 'Narzędzia' },
    { _id: 3, url: 'dokumentacja', label: 'Dokumentacja' },
  ] },
  { _id: 5, url: 'nowosci', label: 'Nowości', categories: [] },
  { _id: 6, url: 'okazje', label: 'Okazje', categories: [] },
];
export default data;
