import type { HouseData } from '../types';

export const mockHomesData: HouseData[] = [
  {
    pk: 1,
    name: '4-к. апартаменты, 415,8 м², 13/13 эт.',
    address: 'Россия, Москва, ул. Новый Арбат, д. 32',
    city: 'Москва',
    building_type: 'монолитный',
    decoration: false,
    floor: 3,
    overall_floors: 12,
    overall_square: 415,
    living_square: 155,
    kitchen_square: 35,
    view: 'на улицу, во двор',
    balcony: false,
    images: [
      'https://images-cdn.cian.site/realty/uploads/froala_editor/images/tribeca-apartments-moskva-jk-225111001-6.jpg',
      'https://icdn.lenta.ru/images/2020/04/10/12/20200410124306071/square_320_ccd370fcc106d7282ba36398fe768b1e.jpg',
      'https://www.restate.ru/attachment/f880f7f58d90fdd3d64f0615aaf6dc03e7e32bad/proportional/x500/1.jpg',
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFRUZGBgaGhoYGhkcGhoYGhoYGBocGhgcGRocIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISHzQrISs0NjQ0NDo0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALEBHAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAEYQAAIBAgMECAMFBgMHBAMAAAECAAMRBCExBRJBUQYiMmFxgZGxE6HBI0JSctEUYoKy4fAkc/EHFTM0krPCQ5Oi0hZUg//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACcRAAICAQQBBAIDAQAAAAAAAAABAhEDEiExQVETImFxI/EUM7EE/9oADAMBAAIRAxEAPwBy1JhpnIWrW1yk5xA4i0iqEHvgBE2JEExWKynOIp8sopxbsAYWB1Ra5LHwEm3p1gaYKC45+5nbYYcDaAEYadhpG1NhwnIjEEhow2dtN6RyzU6odDztyihTJVaAFspvQrdhgj/gbIX7j/rI6uz3XVSRzGY+UrQaG4baVVOy7ActR6GIYy3COEkp4d2yVSfaCjb9biVPisirbXrOLF7DkoC+2cAGGOqLTpmkp3nY3qEcO6KLyMPN3gBKDOgZEGnV4gJQZ2DIQ02GgMnvNhpzVG4hqVDuILXYgnU2FgM+Mb7Lp0mRXS7g6MwI0NuydMxAAPD4N30FhzOX+sZUNnIuZ6x79PSF3nJMANkzRackzhmgB2XnBeRO8j34ATM8rWP6MipVLvVbdYjq2Fx3Bj58JYFMx2Atfn+sANbOwaUkCIu6uveSdSTxML3oJTxSNkrA21sQbek6atAAnenJeBvXg9TFQHQe9cQN8YLxdXxcCNaAwlapPaWxm2UGaerbVSPK/tI/jKdCD/fKBBp6ZivaFAhSfD3jI1ILj33kbuIgBxs4dQefuYVuyDZw6i+fuYURGKyPdnLUgdRIMdtBKVt/IWvflmBoPGdYbGo4ujg+BEWpXRVGNheR9ZGyEaiHCdbsYgAGdBoS2HB7pCaDDvjEaDTYaRzd4gJbzYaQ702pJNhmeQgMnDzYaE4bZbtm53Ry1P8ASOMNhETsjPmcz6wAR1itMK1Z/hqxsCQSSbE5AdwOvKNcTs1wg+A4Rwbl2QPccgCRbhD2PuPcTmtXCqSbnuAuYgCAOrZjc2zNtTbW06VwAOAtOGcboPMXtI8rWOeUACUqKyhlNwdDNFoFSTdJ67EcFNt1cycrC/G3lJd+AErNInecNUkT1IDOmaclxB3qwWpiLam0AGJrRftSitVQjMwF/um3rzgFfa9NO04kNDapqn7JHfvVSR/1HL5wAN2VgadEFkB3m7TE3JHLkBC3xMA/ZcWR1aKr3u49l/WJ9sYfGUwGqHdUm10ItfllnwgOx5iMaq9pgviQIpxO3qY0JbwH1MrbC5uczzM4ZYUFjDEbec9hAO8m/wCkXvtStft+04YSO0YrPS3EFrUwdQD45wtvCDuYhC9qeVxceBv8jlIql/hvfmvC3OGcB4CD1l+zfxX6wAm2av2a+fuYQVkezF+zXz9zCSkoRVuli9TyH86SoKSMwSDzGUuvS1Oofyj/ALiSnbsz7Za4QfhNuV0+/vDk2fz1j/Z3SZXZUdCGYgAg3FzkOUqQSF7LT7an/mL7iJ7LYdWejBJnw4SqToJNCAN6QOokD4TlGnw5v4cAFibPsRvta4DADWx0z4Rph0ROyAO/j6xPt7FlKqDduPhoeR4zjDbVQ6ndPfl89IAWMVRcC4uTYd5OkkdyMsrxMrg2PmCOHeDCFr8zfvPGAB9Kud3dYdbevvWAXdysBnf/AEnbvlAqdcMSMwQpbxtqBzNrnynIcuQqtu3yvraABdNEQEKoUHM2AFzzym6dcFggOdidMrDvgT4osRcAaCwNxy1sIHtHaFFHdWZeq7AL2rWJAyF4ANXxHKQCswbeBvkRYk2F+IA4yv1tvr9xGbx6o+pgFXa9ZtCF8Bn6mAWW5q9hmfOLsVtumn3wTyXre0qzl37TFvEkzDSgFjP/AHrXrErQTTUkgWvp7Tn/AHFiXzqVgvcoLfM2nOw8V8H4nZuwTd3tMi1/PMQivtd21qeSKfc7sQDLZHROklncFzwL9bT8K6eZ9ZZE3VyVb+OnoJTcDt7E3Wmjk3yG/uED/wCNwPOPkFUj7bFMv7qKqewLe0AGeIxm4LsVUczYD1aVLpJttaqCmp3+vvFwLAWBAA/Frr7xx+wYTtNTeofxOXb5s0R9IWwu4ooIFcNnbPq2OpBI1t3wGVsicsslInDRgQMJzaELSZuyrN4KT7Tf+76v4D/fnAD0FxB6oyhjwaqMjAQMVyHgPaDVl+zfxX6w3dyHgPaC1x9m/iv1iAK2Uv2a+fuYSUkGyx9mvn7mHbsoRVel69Q+A/7iyllZeumSfZnwX/uLKUFmfbLXCIwIdshPt6X+YvuIMqw/Yq/4il/mL7xPhlI9LVJ2EnSrO1E0MkR7k3uSUCbAgMqnSoj4y/5afWJbQzbi3xD3ucyPLe4esCFLK99N75TH1o3TNfRl0SI7L2WI8P0hKbWcdoBu8ZH9IvZiACeIHzF5E9US1OMuGQ4SXKH2B2yC+6qsT8OofSm5+k52JtGrVroigC5OmZsATqYv6ObWo0KzPVVmG4VAUA5ta97kcLjzkexts/s1X4iIGyKgNcWBIscuOUsklwFOpUrIjMxJdQQScrG7ZaZAGS7ewm5iaqn8bN5Od8fJhARtVxVNZCEcszi2gLXvYG/MznF416jl3YsxtcnXkInJLljUW+DpVE2LSBSSpbuvNIxIQ/i/W0h5YrspYpPoLDidi0DUdcA8yPSHbIoK7oGvYsARe3AmSsybop4WlZyVnNhLimzqI0pqfG7fzXi3pHtNsMitTpqd5t21rcCeHhNbM6FGGo1gwamjhhowUi3DU5Q9hjW7Tsni4X+XOIG6TY5z1UUDlulh73mnq450YvUCLqQqkNYZ5BBc+F4biG2KwJADV6+V7AnffPz8IC9fCr993/KAPeJMXiAgtubz2Fy9NwT+8d9+P5YNhKj20UX47iu3oT9I6Cy1bMxGHqVAi0ToTvMxOndpHow6L2UUeCgSr9HlcVlLM5WzaoEXTkBLWTJZSInMHMmcyC8QyxMsHqjIxiyjlA8So4cjf0lmaBLdUeA9oLiB9m/iv1hn3R4D2guIHUYc2T3MBhOyh9mvn7mHAQPZQ+zXxPuYeBGIrnTBPsm8E/7glGYZS/dLR9i+X4P55SQoItu/OZpbv7Lv2pESUicxGGw6TftNG4++vvIKYCi1jrfX+kZbCscTRsD/AMQRSUqZrHRpW+56Cs1Wrqil3YKoFyxNgBzJOk6Age2Ke9QqDmpmhzk2Hx9J80qIw/ddW9jClaeIlZ3Td1uVd1y+67L7GA6LrtsXxD+f80A3sj/F85VsLisQzhTWYlsgWbfubE53ueEn/bcSNWB/MjL/AOInJLC7OmOaND3EHqDwX5Awapx/MPpBkxT7ifEKKWsKa2YlgMgxIvurfK55HlB6m2LMQ1M3DdYKb2IyIzA5SPRmuivVgw3FoOWdh9ZBR1P5fqJG+0UfMK4yAzHLwM7oG9zYjK2YOtwfpGozSrcG4XZM+fqfrJSblv4fac/DJJI53tuvof4bQmngnJyRuA+74cWEFjm+gc4rs6QdQ/lMhtYIeGZ+cLrYDEpcHDVCACLqEOWefVdjEGJ2qyMKbU3BUaM26RlfNSl41hl4B5YjZlO/fkT75xnsMddPzj+WUmp0hcm4QZ3ObMddezaH9HNt1WxNJeqFZ87b3AH8RPKOOGSabIlli00erh4k6T4sU0Rym/1rbt921xrfy+cbUsxEXTHC79NBuM3XGSgsdDwE6UYMrlTpK/3adJPEhj/MfaTUdp4l1DAuL6biU1W3CzsRf0gKbIc9nDVD/AB/MYd/uNyvVw9RGtkzVEG6eYAv7y7JoZKtFgHq3NQjrXKNa2guAZn7Vh00v8x9BEo6N1z2nPm5+gkq9ET95x8z9YrQ6G+F2lSeoqL2jfiOAPfGrGI9l9HVpOr79yL5WtqCPrHjSWUiBpATJahg+9EMuNRIFWGR8D7RpUi3EjI+BmtGIMB1R+Ue0ExJsh/OnuYco6q/lHsIBj+wfzL9YqKD9jJ9kv8AF/MYxCQTYg+xX+L+YxiIwK30tT7F/wD+f85/SUpFHOeslRrx05ZTBTU/6yUmmwtHlAUc4x2Av+Jo/wCYPrPRxh0/CJ3TwiAghVuMwbC4jabQbHK0soBt1/h4eq+7vbqFrXte3C9jaOwsixWFR0ZHUMrCzKRcEHgRGB4C2Jb8A/6v6TlMSBfeXIjhxPGexVujODGmFp/9EGbozhf/ANRP/bi0hqPLKODU2YAZ2Nu4jlCV2fdbb1s2IIFj1hpcWOWR8o5xezHV3CYdwodgtqb7oUMQLZaWtIGVk7asp4BgVJ9YqAio0CFRWctujdub3PWZr6/vfKbxVyXcAXLEnKwzzJtOmrSWm67j6ZkexjoYDQxLkgALmbaH9Zw22mN93Duw0vcgG3fuztMKzuFpoXcnIAjjrr3cZbk2EXVVfD4m4A3rVcKBvWG9Yb97XjSApY2xXv1cOR3bwP8A4yw7FxNZmPxqe5mm6CQeJvp5TWJ2OlKou5hsWNxuubI+8h4oUJBOsIouhcFExCG4v8YAA2OW5b5+USAvlftHwP1tPHemNM/t9TInJdAT/wCnPWmqXZu73gVXo1SqMapeorOTfcfdGm4SMuKi0ck62Ejww4dwLlWA0uVIF8xa9u4+hjTopTJxdGwv1rnuG6cz3T1fEdFKBUq9Sqy3uQ1S4vcm5BGtyT5ybD9F8MlH41JevTBIbK9la5BsMxYGQ7UW2VGm0hhgaKkZsBw5zvEUbaZyvYkAFxyam487BreQb1liw1ZTTS5F7W9MvpMseXW6qjXJh0q7sGCTmpTynO2cRuUXZGswGovcC4uR32vJdobVpthGaipDgKVbdINr5kg/unjxEtyinTZChJq0heaWcx0iDYuKrliW333nBJYpugE9ZragW0AI8DLK7LzlLcW6BN2D4muqC7sFHeeXLnDTY6Sv7TQvWRBwsPNjc/IAecmTpWVGNug/ELYKeDDeHeOfyi13zjXaNTPI5Abo/KBYfIRA9TOCutxOr2PTXYcxAMQBY2PAxriIBVm1GIFu9UflHA8hFm0uwfzLHFSJtsGyfxCJgHYHFBMOrfm/mMK6L4w1yxe2pAA5AxI7/wCHX+L3MK6DPmfFh9Yyi8DCJ+ETjELSRGdwqqoLMSNANTJw8q/TfaQTDut9Rn55RATYjpds9P8A1qbG2QW7Z8jug2gdP/aDhiVRKbu7FVAC2G8xsM2AyudZ5VSwrvmF1OWY+scdF6NsXRDrYBmYnP7tNiPmBE/II9Ep4KuWLPi6pBJO6opoAL5LdUBOVswZScVtPE77/b1gu+6r9pUt1Tpe+ZAI9RPSUxNNlyYWtr/Znm2P2RW+PUCI7qXLqyi6kP1u1pe+R8JEG23bLklWx6J0JxRfCIWJZgXUkm5NmOpOuREZY+tYC0o/RGniqDuj0mCP1hcp1XHcGvmMvISw7SxNRULLSZ2AyUWFzwFzkJrRkUbpXijWxtGkbsFKpYGx67Ava37oX0jbF9GMNh0NcvU6o3926sDu52zF7ZRX0YwlQ4t8RiU3N0NYmwG+2VlseCXHmIx6cbXRsMURgSzKtgeF7nysLeczlJ3SNYrbc1S/2iU90F6dQNlcLusL2zsSwyv3R3sjpFSxLbiI990sSyAAAWGZvnmRPKKdE65HzAsJeOhFVFFV8h2AM8twbwGfeQT5zQga7Sr7lVwigFU1AAza3HKT4fFddFP4d+/kTfL+8ol21UqfEd0AK9UNfhlkSOI94yw9Ms9KoDvD4ZRyOsAQuXhneNAXDZ+z1fDguvWIJB0I1tpKRtt974X5j/4z0DZGKvhg5+6rei3t8rTzDaGKZjTDJu2Jz3lN9OUQDt6nWJ4G59IXhcWAgHefcxRzzta4gpxoU7rE3H9iDAfYlwwzMPwDr+zul9Vf53/WVOpjxzhuHxe7xyKn2ktjSEGzKJenvbxJLtqfQQZdoIcM9e3WRwgQEEt2bkH+Llwh/R1LUl1zcnlraBHYuCbP4tRfFSQPRbTzscYynJS/075uUYRaOsDUeoiuiZNmAXUN5g6TdPFOzOgpuShUN101ZQwtds8iJBidhYdF+ItXfF+zu2Zu4G3z4TewyAa9gAPiLkOQUjjnN/42J/syebIv0GpVfT4FXyKH2eF06LsA1nTMizZN6AnKRh23rsWVB+Fd4seZAPZ7owp4qk/YfeP4Su6bc7FfrIy/8sIwck3svJWPPKUlF0boJZYmwoviWb8O8fMZD+WOKtB3W6Kxtrugta+mjjl+F/Lio2ap+013xkQcmBLXzBVSMjxAhh/pj9jltlf0SY98x5e8u3RrCr8I5Dtnh+6soWNuCL34e89E6N/8I/mP8qzrOUhxGNpjV08jf2irE7WpD7xPgp+sT1Xi/EPNDKhrV24nBXPjuj6xZjdoiohstt1l43ve/wCkU1XmYfFKQabZbzXDZcBkP75xWFD/AAW49NUcsoFxdbG+ff4x3sPZyUDdGdrm9mscyLcALaRDsqk+6AEZiCeyCRr3S3bIout95CL5529o6EMPjORktoqx/RhMR/xd853tvlRcaXtHgYze8ecAK6nQjCLYGlvWyG87txJ4t3mS4HZOCVz8CmhqU+IyCtmLFwDY5nLXOcdJMDjKqqtGoqjeu92K7wFrKSFJtrccYkwuxNpp2KicdXJAubkLdeqO4WHdAC07S23h8NYYlvh3A0Sq6Z6DfWnu72Ry1gP/AOX7LIH+IQA6HcqL5i6iLU2ftUAgtSa5JJLne0t2hY27u+dDY+NqEJWSgKbG77tr5DK178QPnzk76qrYulXyPU2mjU0ei4ZWBIcDUA2yuOM5TGMTmxPjDqGy6aoqFRZRYWuCB46kwPE7FcZ03/hf/wCw/SUQF06o4gH0kOJwNF83oo/DNVJt5iCoKiD7RCtuOo9RC6dcHQwKEO0dgYcAlcGhP7o3T/8AG14DgMUKI3KmGCITugCwCgjmADcfQy5K0jxmCSopVuP9gxWBXsTRDvvK7BTTVDpZrXIJAzBF+WdxJtl1Km4aTklh961rqb3tmbgjMTVXAvRIUgHLI2yZdB4crcCRzg5tvI6nNSFZSdRwt3529OUoCz7LIam+GF0uDZh95GFiRfzEq3S/YBwyJUD7674Qi1iC2h7xlH+xRvYvLesqADPuN7+ZnX+0uoBhFB+9WpgepPsJL5BFVc6jTU+Otoj2kG+Ixztl3jQSzU8G7t1VyzBY5AajX9IyXYS7oBNzztlBgigq7HjGFTEHdPDqW+VpZ63R/wDDb2i3H7IZVt8Ns2UFlFwF3hvEgd0iS2LjVoE2KOoByYD0VYkx9Rv2ZlHaLFzbW7OWPv8AKWLCoiMQr713uTyJsLW4aDKC4nYjlWC2PWOWhza/1nJgh+SdnVml7I0JFQ/stIte/XvfXtcfSZsZ7fF76nInS/KNn2exppTZGFi+9Yi63zGZ5xlhMIi3brKWN2uu8DbIfITbDF2/tmeWSpfSK7i6Adrkcs40wmyadOpvo7nqlbE3FjY8u6EvhBUr7iMhuUzAstgu82WedgY72rs+mib6KFNwMrgWIP3b24TOcbhNv5Li6lBIVV8eaIBBbO+jFdPDXWBPtQ1LuSTZSMzc9U31843wez0rqwa/Vtawv2r6+kFxuxkoqbMCrndbIgjeBF8+6ZYofiUl0aTneVxfaEmJxqOBe9+BE9D6K1w9DeU5Fj7CU3E9D669kBvCArg8bSuqfFUXvYXtfT6Tu3OPk7q4scovxOJkdSpBary2zNIlwtL4lREvbfYLfkCcz6T0fZ+xMPTA3KS3H3mG83/U2fpPO9hf8zS/P9DPV8MtxCPASOg4E4bEHRQL8z+l5KaCnVRBa2y6TG5XPmCVOfeDKJA8bh6zKQ1Yg8kWx7gFDe5iYUHTOorvbMb26PVFOuXHeEsw2av3Xcfxb3815NTwrjWoWHJlUj5ARUOxLs/pKjuERKrMdXRS9MHkz5btu8W749OJ4DrNyH1mDZ66L1Re5CgKCeeUKpYYKLAWgMioh/vkeA/WTqslVBOg0ANLTMkWlNB5sPADtkFrEXnm2Jxq08RVpJUF0cjcJzAPWAtroRPQ3eeMdMqCvi6xsO2BfvVVH0kylpQ4x1Mu2C2scg3O14/RwVE8To1sRTySo1vwv1h88/nLbsXpg6KFr0m/OnWHiVOY8iZKnFlaGek7V2f8WiN3tgdXz1H98pVsIEViXVt4AG/72ma21uD6Rph+mmGFENvljoEVG3zyyYC3naVba22sTUqCoiJTXMBCCzuP3mBAHDT1MrWo9iUJPosGF2jRwhd6hJdx1KajeduZtwHjaI+lG0K+JVGYCnTBJVL3Nzxcmwvb6yXBsXb4rr17BbcFA4Du1PmZJtl1+HbvHdJnbTZcUk0hZhtsYlPvlxyYK3z1+cZ0OlpvZ6Y8Rdfe8rwpi+Zt4TTIeDA+I+s5/Ua7N/Ti+i74bpHh31LL4i4+UZ0MXScdR1J5XsfQ5zzEg8R/fnJPiC1jp4kf0lrKyHhj0enPhEbNkVuOag/MzVbChxZlBHeLzz/B7RdB1KrqPEsI0w3SesPvI/jkfpGssb3QnhlWzLIuyUF7KbnW5ZtNNTlODsy3Ya3iLiBUOla/fpkflIPyNoyobfw7/f3TyYFfnpLjOL4ZnKElyhbQ2fVSu9VlVgyqAF1BUWJzHETjb2NRqe5mr7wNmUqbAG9iRY6iWSlVR81ZW8CD7SQqOIhOKlFxXY4ycZKT6Kv0UW/xLEjsafxRptjAvUougKtlcXFjdcxa3HKMqVBFJ3UVb2vYAX1te06emp1F4sePTDSwnk1T1IF2PWFShTfiUF/zDJvmDDfhyPDYdEXdRQq3JsL6nXWTXlbpKyXTex4I7yHfnLPOQImwoZ7EP+Io/nA9cvrPWMHpPG6NRkZXXVWDDxU3HzE9e2ZXDorrowDDwOcuD2YpLgZFJgpSRHsJrelEmLSkgAke/M34ASb0zekJecl4AEb00XgzVoFj9rUqS71R1Qc2Nr+HOADX4kiqYkKLkgAak5CUDafTy/Vw1Mt++91XyXtHztEdZcRiTetVLDXc7KDwUZHxNzIlJIuMGy67W6YU1BWj9q/MdgHvbj5SkvRd2LsbsxLN3km5h+DoqmVoJi8WgJAvvd2n9+ExlKT6NoxjEkpU1A6y/X+okqU0F7AqOeo84MmLB7QtC0cEZZyUq5LfwH7OwoALmx7xyi3GYxmfLQZDhD3rBadlyPdE25c8+/Q+YmjqkiFd2O9l1gpN8iZFtnFb43RY/KQ4c2ziypiBvG+XfqPSU37RJe47BYaXHt6iY9Xn8v6TKYvmpv8AlP0mib6i/wAjMGahNF1OQOfL+85MaRtkA3vFj0QdMp1Sd00Ykcibj0P0tJ0+GOw2k9r3BX1mbyNr8xn6zR2kd2zL58vI3kKV0bUAnmOq3ocvSLS+R6ugvcFrKxHzHzmIr8GB+UhJHA27mymXP9RCirCUqupzBHeP1WM8LtusulRj3EhveKKOLbnfx/rJKi75BuVNraXEFafgGk15LPR6TuO2qt6qf0jHD9JqTdpWXwsw/WUpaTAa3nSuR2lmkZS6dmbxR8HodDatF9Ki+B6p+cNDDmJ5oj/2YUjZa+80U5dozeGPTPPbZzsLnNrTO9J1p6RtkKJ1TpXtLr0Fxp69Bj2eun5GPWHk2f8AHKrRpw/A4n4VVKo+4esOaHJ/ln5COMglE9RWck2m6LAi4NwRcHmCIPUqZzUwZMWmi8DfEgamVvanTOil1S9V+SdkeL6el4m0uRpN8FqeraJdq9JqFHJ3Bb8C9Z/QaedpScTtXF4m4L/DX8CXFx3tqfK0HwuyFQ3OvHv8ZlLKuEaxwvsY47pdiKp3aKfDU6O1mf07K/OLBs53bfqOXbiWJY+V9BGyYdbZCSUltlM3KTNlCMQWhhVXhCAhXT0hAWcM4ByN/p4yosUjpK99ReJ8fSVnNteUNrV93lFrVd43B/UScjrgI78kaXU56d8mRiOzcTg1D94Zc/1nK3B6puOWslSZTiFV8ZcAMJqi99M/fykJIbLQ8jofAzAhHMSnJMSVB4xFhb5HIxdWQEyY1DazDeHtItwfdNx+E/QxamOiIUiDceoyPqPrJBimHaXe79D66GbU52ORzmzBu+QrwT0KqPlvW7mkj0/L5j9YCaYOuXfDkcWHESZNLgpb8m/hkC/Dnr/WQNTB5GMaVQHQ27pzWQcV8xIUvJTiCUnUCxz8faTqE718P0kFSkD3+OvrrIdwroSPHMR1fYrroZLQvoQ3yPqP0nS0yOBEWCo4F7Z92YPlrDMHtEnX0P8AWNxaRSlGwtKhGufykyVwcsx45+0xKqNrlJP2VToYJrsbvo2ig6AHwMlCCBVcKQbn1kqO4Frn1MtRXTIbfaKdU1/vnJ11H98pkyWzFB6aiSt9JkyERyPR9h/8tS/y0/kE4qTJk6Ecr5Kb0+/5V/zL7yobI08pkyY5eTbFwWDCar5+0IfUzUyc/Z09HazTazJk0XJB22h8ICmnlNzJceyHyBVtD5wNO2PAzcyRMcQo9keBkFPWZMmaNGd14V90eEyZARGusiGsyZKQE1fsjx+k5WZMiA4P1ktHjMmRPgESL+sYUex/fOamTORoQN2pp5kyOIMgp6tNV+EyZNzMIpaRjhNJkyZZDWIzTsmCmZMlY+BT5P/Z',
      'https://www.cre.ru/content/upload/news/15579097350134.jpeg',
    ],
  },

  {
    pk: 2,
    name: '3-к. апартаменты, 415,8 м², 13/13 эт.',
    address: 'Россия, Санкт-Петербург, ул. Невский проспект, д. 32',
    city: 'Санкт-Петербург',
    building_type: 'кирпичный',
    decoration: false,
    floor: 4,
    overall_floors: 12,
    overall_square: 415,
    living_square: 155,
    kitchen_square: 35,
    view: 'на улицу, во двор',
    balcony: false,
    images: [
      'https://cdn-p.cian.site/images/31/613/201/kompleks-apartamentov-baires-moskva-jk-1023161381-6.jpg',
      'https://cdn-p.cian.site/images/31/613/201/kompleks-apartamentov-baires-moskva-jk-1023161391-6.jpg',
      'https://cdn-p.cian.site/images/31/613/201/kompleks-apartamentov-baires-moskva-jk-1023161386-6.jpg',
      'https://cdn-p.cian.site/images/70/863/401/trend-moskva-jk-1043680729-10.jpg',
      'https://vsenovostroyki.ru/upload/images/3(617).jpg',
      'https://img.avaho.ru/rsz/upload/objects_photo/8286413_888e01c0be9dd274bf3578e316c705b8.w883_h571_strict_q51.jpg',
    ],
  },

  {
    pk: 3,
    name: '2-х. апартаменты, 300,8 м², 13/13 эт.',
    address: 'Россия, Рязань, ул. Ленина, д. 2',
    city: 'Рязань',
    building_type: 'кирпичный',
    decoration: false,
    floor: 4,
    overall_floors: 12,
    overall_square: 415,
    living_square: 155,
    kitchen_square: 35,
    view: 'на улицу, во двор',
    balcony: false,
    images: [
      'https://www.cre.ru/content/upload/news/15383813799237.jpg',
      'https://freedom-novostroyki.ru/upload/iblock/3c4/3c4a1218a82f475028b2ad86b868fee5.jpg',
      'https://cdn-p.cian.site/images/31/613/201/kompleks-apartamentov-baires-moskva-jk-1023161386-6.jpg',
      'https://media-cdn.tripadvisor.com/media/vr-splice-j/07/2f/da/5c.jpg',
      'https://freedom-novostroyki.ru/upload/iblock/3c4/3c4a1218a82f475028b2ad86b868fee5.jpg',
    ],
  },

  {
    pk: 4,
    name: '2-х. апартаменты, 300,8 м², 13/13 эт.',
    address: 'Россия, Рязань, ул. Ленина, д. 32',
    city: 'Рязань',
    building_type: 'кирпичный',
    decoration: false,
    floor: 4,
    overall_floors: 12,
    overall_square: 415,
    living_square: 155,
    kitchen_square: 35,
    view: 'на улицу, во двор',
    balcony: true,
    images: [
      'https://static.tildacdn.com/tild3466-3735-4463-b466-373237376634/Sky_Grand_Loft_3.jpg',
      'https://www.restate.ru/attachment/f880f7f58d90fdd3d64f0615aaf6dc03e7e32bad/proportional/x500/1.jpg',
      'https://cdn.iz.ru/sites/default/files/styles/1920x1080/public/article-2021-01/kitchen-living-room-4043091_1920.jpg?itok=JsuzfmRf',
      'https://polis-group.ru/sites/default/files/buildings/studio_0020000-min.png',
      'https://cdn.iz.ru/sites/default/files/styles/1920x1080/public/article-2021-01/kitchen-living-room-4043091_1920.jpg?itok=JsuzfmRf',
    ],
  },

  {
    pk: 5,
    name: '2-х. апартаменты, 300,8 м², 13/13 эт.',
    address: 'Россия, Рязань, ул. Новый Арбат, д. 32',
    city: 'Рязань',
    building_type: 'кирпичный',
    decoration: true,
    floor: 4,
    overall_floors: 12,
    overall_square: 415,
    living_square: 155,
    kitchen_square: 35,
    view: 'на улицу, во двор',
    balcony: false,
    images: [
      'https://adcitymag.ru/wp-content/uploads/2017/05/VjWxBMl4Gw4.jpg',
      'https://images-cdn.cian.site/realty/articles/content/36585/3982790.jpg',
      'https://radi-love.com/wp-content/uploads/2020/11/photo5262814769038078020.jpg',
      'http://ex-terior.ru/wp-content/uploads/2018/09/skyscraper-apartments-moscow-city2-e1536046453863.jpg',
      'https://moscow-city.org/wa-data/public/shop/products/67/01/167/images/2211/2211.750@2x.jpg',
    ],
  },
];
