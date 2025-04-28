import {useState} from "react";

function Invoices() {
    interface InvoiceType{
    customer_name: string;
    date: string;
    amount: number;
    product_ID: number;
    status: "paid" | "unpaid";
    id: number;
}

  const allInvoices: InvoiceType[] = [
    {
        "customer_name": "Samuel Celia",
        "date": "01/08/2024",
        "amount": 62152,
        "product_ID": 295555,
        "status": "paid",
        "id": 0
    },
    {
        "customer_name": "Saul Madison",
        "date": "03/11/2024",
        "amount": 73438,
        "product_ID": 889056,
        "status": "paid",
        "id": 1
    },
    {
        "customer_name": "Harper Max",
        "date": "07/09/2024",
        "amount": 13348,
        "product_ID": 962390,
        "status": "unpaid",
        "id": 2
    },
    {
        "customer_name": "Zoe Leo",
        "date": "17/06/2024",
        "amount": 12439,
        "product_ID": 569029,
        "status": "paid",
        "id": 3
    },
    {
        "customer_name": "Lucas Max",
        "date": "02/07/2024",
        "amount": 64708,
        "product_ID": 509641,
        "status": "unpaid",
        "id": 4
    },
    {
        "customer_name": "Emma Finley",
        "date": "02/08/2024",
        "amount": 6462,
        "product_ID": 503965,
        "status": "unpaid",
        "id": 5
    },
    {
        "customer_name": "Nora Eli",
        "date": "02/09/2024",
        "amount": 36121,
        "product_ID": 284898,
        "status": "unpaid",
        "id": 6
    },
    {
        "customer_name": "Isabella Zara",
        "date": "03/02/2024",
        "amount": 80685,
        "product_ID": 341031,
        "status": "paid",
        "id": 7
    },
    {
        "customer_name": "Aria Hazel",
        "date": "05/01/2024",
        "amount": 58140,
        "product_ID": 606627,
        "status": "paid",
        "id": 8
    },
    {
        "customer_name": "Ella Violet",
        "date": "06/05/2024",
        "amount": 45792,
        "product_ID": 816140,
        "status": "unpaid",
        "id": 9
    },
    {
        "customer_name": "Chloe Jasper",
        "date": "06/11/2024",
        "amount": 10382,
        "product_ID": 398883,
        "status": "unpaid",
        "id": 10
    },
    {
        "customer_name": "Olivia Amos",
        "date": "07/01/2024",
        "amount": 14144,
        "product_ID": 339704,
        "status": "paid",
        "id": 11
    },
    {
        "customer_name": "Sophia Max",
        "date": "08/05/2024",
        "amount": 77203,
        "product_ID": 586831,
        "status": "unpaid",
        "id": 12
    },
    {
        "customer_name": "Lucas Maverick",
        "date": "08/09/2024",
        "amount": 97597,
        "product_ID": 407196,
        "status": "unpaid",
        "id": 13
    },
    {
        "customer_name": "Samuel Julian",
        "date": "08/11/2024",
        "amount": 8559,
        "product_ID": 508449,
        "status": "unpaid",
        "id": 14
    },
    {
        "customer_name": "Oliver Piper",
        "date": "08/11/2024",
        "amount": 2422,
        "product_ID": 711517,
        "status": "unpaid",
        "id": 15
    },
    {
        "customer_name": "Noah Piper",
        "date": "10/05/2024",
        "amount": 85383,
        "product_ID": 628727,
        "status": "paid",
        "id": 16
    },
    {
        "customer_name": "Scarlett Cora",
        "date": "29/12/2024",
        "amount": 94070,
        "product_ID": 977813,
        "status": "paid",
        "id": 17
    },
    {
        "customer_name": "Nora Leo",
        "date": "29/03/2024",
        "amount": 19714,
        "product_ID": 988462,
        "status": "unpaid",
        "id": 18
    },
    {
        "customer_name": "Evelyn Archer",
        "date": "23/10/2024",
        "amount": 23832,
        "product_ID": 122416,
        "status": "unpaid",
        "id": 19
    },
    {
        "customer_name": "Owen Asher",
        "date": "29/05/2024",
        "amount": 47044,
        "product_ID": 721706,
        "status": "unpaid",
        "id": 20
    },
    {
        "customer_name": "Oliver Nina",
        "date": "31/07/2024",
        "amount": 61985,
        "product_ID": 874255,
        "status": "unpaid",
        "id": 21
    },
    {
        "customer_name": "Ella Layla",
        "date": "17/03/2024",
        "amount": 86617,
        "product_ID": 570037,
        "status": "unpaid",
        "id": 22
    },
    {
        "customer_name": "Scarlett Eli",
        "date": "21/01/2024",
        "amount": 66403,
        "product_ID": 935642,
        "status": "paid",
        "id": 23
    },
    {
        "customer_name": "Benjamin David",
        "date": "23/10/2024",
        "amount": 97670,
        "product_ID": 478111,
        "status": "paid",
        "id": 24
    },
    {
        "customer_name": "Aiden Ethan",
        "date": "09/08/2024",
        "amount": 78084,
        "product_ID": 923256,
        "status": "unpaid",
        "id": 25
    },
    {
        "customer_name": "Harper Lily",
        "date": "29/07/2024",
        "amount": 27046,
        "product_ID": 365851,
        "status": "unpaid",
        "id": 26
    },
    {
        "customer_name": "Luna Archer",
        "date": "18/07/2024",
        "amount": 71182,
        "product_ID": 886116,
        "status": "unpaid",
        "id": 27
    },
    {
        "customer_name": "Ethan Carter",
        "date": "05/11/2024",
        "amount": 91702,
        "product_ID": 382547,
        "status": "unpaid",
        "id": 28
    },
    {
        "customer_name": "Isabella Archer",
        "date": "12/06/2024",
        "amount": 11292,
        "product_ID": 677848,
        "status": "unpaid",
        "id": 29
    },
    {
        "customer_name": "Mia Sophie",
        "date": "28/01/2024",
        "amount": 15703,
        "product_ID": 885714,
        "status": "unpaid",
        "id": 30
    },
    {
        "customer_name": "Aiden Isaac",
        "date": "09/06/2024",
        "amount": 8307,
        "product_ID": 511646,
        "status": "unpaid",
        "id": 31
    },
    {
        "customer_name": "Oliver Violet",
        "date": "26/07/2024",
        "amount": 7513,
        "product_ID": 507859,
        "status": "unpaid",
        "id": 32
    },
    {
        "customer_name": "Elijah Madison",
        "date": "16/04/2024",
        "amount": 75733,
        "product_ID": 442728,
        "status": "unpaid",
        "id": 33
    },
    {
        "customer_name": "Maya Beatrice",
        "date": "25/10/2024",
        "amount": 73049,
        "product_ID": 286232,
        "status": "unpaid",
        "id": 34
    },
    {
        "customer_name": "William Audrey",
        "date": "26/11/2024",
        "amount": 51795,
        "product_ID": 622340,
        "status": "unpaid",
        "id": 35
    },
    {
        "customer_name": "Chloe Lily",
        "date": "14/10/2024",
        "amount": 54889,
        "product_ID": 417737,
        "status": "paid",
        "id": 36
    },
    {
        "customer_name": "Isabella Lily",
        "date": "06/09/2024",
        "amount": 27895,
        "product_ID": 323052,
        "status": "paid",
        "id": 37
    },
    {
        "customer_name": "Sophia Luca",
        "date": "30/07/2024",
        "amount": 65560,
        "product_ID": 680566,
        "status": "paid",
        "id": 38
    },
    {
        "customer_name": "Evelyn Zoe",
        "date": "09/12/2024",
        "amount": 68115,
        "product_ID": 509133,
        "status": "unpaid",
        "id": 39
    },
    {
        "customer_name": "Noah Zoe",
        "date": "27/05/2024",
        "amount": 17755,
        "product_ID": 122307,
        "status": "unpaid",
        "id": 40
    },
    {
        "customer_name": "Grace Maverick",
        "date": "18/10/2024",
        "amount": 44523,
        "product_ID": 425956,
        "status": "unpaid",
        "id": 41
    },
    {
        "customer_name": "Samuel Eli",
        "date": "08/06/2024",
        "amount": 91639,
        "product_ID": 610118,
        "status": "paid",
        "id": 42
    },
    {
        "customer_name": "Mia Zara",
        "date": "21/05/2024",
        "amount": 47456,
        "product_ID": 966825,
        "status": "paid",
        "id": 43
    },
    {
        "customer_name": "Aria Violet",
        "date": "22/11/2024",
        "amount": 5704,
        "product_ID": 332427,
        "status": "unpaid",
        "id": 44
    },
    {
        "customer_name": "Charlotte Sophie",
        "date": "16/05/2024",
        "amount": 30183,
        "product_ID": 515574,
        "status": "paid",
        "id": 45
    },
    {
        "customer_name": "Amelia Mason",
        "date": "24/07/2024",
        "amount": 24364,
        "product_ID": 735237,
        "status": "unpaid",
        "id": 46
    },
    {
        "customer_name": "Henry Leo",
        "date": "14/05/2024",
        "amount": 56403,
        "product_ID": 462204,
        "status": "paid",
        "id": 47
    },
    {
        "customer_name": "Emma Madison",
        "date": "23/12/2024",
        "amount": 18132,
        "product_ID": 329548,
        "status": "paid",
        "id": 48
    },
    {
        "customer_name": "Leo Isaac",
        "date": "10/01/2024",
        "amount": 75236,
        "product_ID": 149025,
        "status": "unpaid",
        "id": 49
    },
    {
        "customer_name": "Elijah Celia",
        "date": "10/12/2024",
        "amount": 5641,
        "product_ID": 665085,
        "status": "paid",
        "id": 50
    },
    {
        "customer_name": "Harper Hazel",
        "date": "16/07/2024",
        "amount": 87177,
        "product_ID": 552828,
        "status": "paid",
        "id": 51
    },
    {
        "customer_name": "Daniel Sophie",
        "date": "13/12/2024",
        "amount": 16198,
        "product_ID": 933655,
        "status": "unpaid",
        "id": 52
    },
    {
        "customer_name": "Oliver Archer",
        "date": "27/01/2024",
        "amount": 5717,
        "product_ID": 792499,
        "status": "paid",
        "id": 53
    },
    {
        "customer_name": "Maya Wyatt",
        "date": "05/09/2024",
        "amount": 85491,
        "product_ID": 520299,
        "status": "paid",
        "id": 54
    },
    {
        "customer_name": "Olivia Landon",
        "date": "20/10/2024",
        "amount": 13146,
        "product_ID": 207853,
        "status": "paid",
        "id": 55
    },
    {
        "customer_name": "Sophia Mila",
        "date": "29/08/2024",
        "amount": 50205,
        "product_ID": 478119,
        "status": "paid",
        "id": 56
    },
    {
        "customer_name": "Madeline Eliza",
        "date": "18/02/2024",
        "amount": 30270,
        "product_ID": 296917,
        "status": "unpaid",
        "id": 57
    },
    {
        "customer_name": "Oliver Layla",
        "date": "01/05/2024",
        "amount": 14386,
        "product_ID": 303760,
        "status": "unpaid",
        "id": 58
    },
    {
        "customer_name": "Noah Sophie",
        "date": "03/11/2024",
        "amount": 89021,
        "product_ID": 638416,
        "status": "unpaid",
        "id": 59
    },
    {
        "customer_name": "Liam Piper",
        "date": "28/09/2024",
        "amount": 64640,
        "product_ID": 810361,
        "status": "unpaid",
        "id": 60
    },
    {
        "customer_name": "Owen Lily",
        "date": "01/06/2024",
        "amount": 30439,
        "product_ID": 211179,
        "status": "paid",
        "id": 61
    },
    {
        "customer_name": "Oliver Maverick",
        "date": "02/05/2024",
        "amount": 19650,
        "product_ID": 802846,
        "status": "unpaid",
        "id": 62
    },
    {
        "customer_name": "Evelyn Violet",
        "date": "04/02/2024",
        "amount": 30119,
        "product_ID": 645573,
        "status": "paid",
        "id": 63
    },
    {
        "customer_name": "Evelyn Violet",
        "date": "04/05/2024",
        "amount": 32377,
        "product_ID": 454601,
        "status": "paid",
        "id": 64
    },
    {
        "customer_name": "Saul Katherine",
        "date": "06/02/2024",
        "amount": 86133,
        "product_ID": 928998,
        "status": "paid",
        "id": 65
    },
    {
        "customer_name": "Henry Max",
        "date": "06/02/2024",
        "amount": 5921,
        "product_ID": 453531,
        "status": "paid",
        "id": 66
    },
    {
        "customer_name": "Lily Leo",
        "date": "07/08/2024",
        "amount": 94254,
        "product_ID": 219062,
        "status": "paid",
        "id": 67
    },
    {
        "customer_name": "Owen Celia",
        "date": "12/05/2024",
        "amount": 67362,
        "product_ID": 803658,
        "status": "paid",
        "id": 68
    },
    {
        "customer_name": "Aria Zara",
        "date": "19/05/2024",
        "amount": 91652,
        "product_ID": 479123,
        "status": "unpaid",
        "id": 69
    },
    {
        "customer_name": "Aiden Finley",
        "date": "23/05/2024",
        "amount": 40102,
        "product_ID": 372622,
        "status": "paid",
        "id": 70
    },
    {
        "customer_name": "Evelyn Wyatt",
        "date": "31/08/2024",
        "amount": 10179,
        "product_ID": 102597,
        "status": "paid",
        "id": 71
    },
    {
        "customer_name": "Maya Scarlett",
        "date": "04/09/2024",
        "amount": 57912,
        "product_ID": 123690,
        "status": "paid",
        "id": 72
    },
    {
        "customer_name": "William Violet",
        "date": "08/06/2024",
        "amount": 86614,
        "product_ID": 168257,
        "status": "unpaid",
        "id": 73
    },
    {
        "customer_name": "Daniel Archer",
        "date": "19/01/2024",
        "amount": 45472,
        "product_ID": 920063,
        "status": "unpaid",
        "id": 74
    },
    {
        "customer_name": "Leo Jackson",
        "date": "18/07/2024",
        "amount": 42031,
        "product_ID": 868863,
        "status": "paid",
        "id": 75
    },
    {
        "customer_name": "Samuel Cora",
        "date": "05/04/2024",
        "amount": 29169,
        "product_ID": 553203,
        "status": "unpaid",
        "id": 76
    },
    {
        "customer_name": "Luna Mila",
        "date": "16/03/2024",
        "amount": 88726,
        "product_ID": 731352,
        "status": "unpaid",
        "id": 77
    },
    {
        "customer_name": "Zoe Violet",
        "date": "30/07/2024",
        "amount": 43253,
        "product_ID": 276972,
        "status": "paid",
        "id": 78
    },
    {
        "customer_name": "Michael Madison",
        "date": "22/03/2024",
        "amount": 76525,
        "product_ID": 804456,
        "status": "paid",
        "id": 79
    },
    {
        "customer_name": "Maya Wyatt",
        "date": "13/10/2024",
        "amount": 29550,
        "product_ID": 582207,
        "status": "unpaid",
        "id": 80
    },
    {
        "customer_name": "Chloe Celia",
        "date": "30/08/2024",
        "amount": 36679,
        "product_ID": 174030,
        "status": "paid",
        "id": 81
    },
    {
        "customer_name": "James Jasper",
        "date": "16/03/2024",
        "amount": 16655,
        "product_ID": 807965,
        "status": "unpaid",
        "id": 82
    },
    {
        "customer_name": "Benjamin Maverick",
        "date": "22/06/2024",
        "amount": 42102,
        "product_ID": 723712,
        "status": "unpaid",
        "id": 83
    },
    {
        "customer_name": "Olivia Nina",
        "date": "27/06/2024",
        "amount": 98307,
        "product_ID": 761917,
        "status": "unpaid",
        "id": 84
    },
    {
        "customer_name": "Owen Luca",
        "date": "30/10/2024",
        "amount": 79891,
        "product_ID": 662801,
        "status": "unpaid",
        "id": 85
    },
    {
        "customer_name": "Harper Wyatt",
        "date": "28/04/2024",
        "amount": 57430,
        "product_ID": 740902,
        "status": "paid",
        "id": 86
    },
    {
        "customer_name": "Saul Cora",
        "date": "03/09/2024",
        "amount": 71673,
        "product_ID": 351827,
        "status": "unpaid",
        "id": 87
    },
    {
        "customer_name": "Alexander Sophie",
        "date": "27/04/2024",
        "amount": 48062,
        "product_ID": 800199,
        "status": "paid",
        "id": 88
    },
    {
        "customer_name": "Madeline Madison",
        "date": "13/06/2024",
        "amount": 30791,
        "product_ID": 527576,
        "status": "paid",
        "id": 89
    },
    {
        "customer_name": "Zoe Zara",
        "date": "28/04/2024",
        "amount": 46865,
        "product_ID": 196482,
        "status": "paid",
        "id": 90
    },
    {
        "customer_name": "Henry Ethan",
        "date": "11/10/2024",
        "amount": 57581,
        "product_ID": 827863,
        "status": "unpaid",
        "id": 91
    },
    {
        "customer_name": "James Lily",
        "date": "19/11/2024",
        "amount": 56783,
        "product_ID": 440990,
        "status": "paid",
        "id": 92
    },
    {
        "customer_name": "Ella Layla",
        "date": "29/05/2024",
        "amount": 93878,
        "product_ID": 398036,
        "status": "unpaid",
        "id": 93
    },
    {
        "customer_name": "Isabella Amos",
        "date": "19/12/2024",
        "amount": 77174,
        "product_ID": 185587,
        "status": "unpaid",
        "id": 94
    },
    {
        "customer_name": "Alexander Luca",
        "date": "21/01/2024",
        "amount": 26871,
        "product_ID": 343620,
        "status": "paid",
        "id": 95
    },
    {
        "customer_name": "Emma Luca",
        "date": "26/12/2024",
        "amount": 24263,
        "product_ID": 889493,
        "status": "unpaid",
        "id": 96
    },
    {
        "customer_name": "Noah Asher",
        "date": "22/05/2024",
        "amount": 42646,
        "product_ID": 255860,
        "status": "paid",
        "id": 97
    },
    {
        "customer_name": "Owen David",
        "date": "06/02/2024",
        "amount": 34086,
        "product_ID": 139176,
        "status": "paid",
        "id": 98
    },
    {
        "customer_name": "Grace Mason",
        "date": "27/05/2024",
        "amount": 35865,
        "product_ID": 713478,
        "status": "unpaid",
        "id": 99
    }
]

  let length = 4;
  const [currentIndex, setCurrentIndex] = useState(length);
  const [filter, setFilter] = useState<"paid" | "unpaid" | "all">("all");
  const [selectedInvoices, setSelectedInvoices] = useState<InvoiceType[]>(allInvoices)
  const [displayedInvoices, setDisplayedInvoices] = useState<InvoiceType[]>(selectedInvoices.filter((invoice) => invoice.id < length));
  const [isModalOpen, setIsModalOpen] = useState(false);

  function goForward(){
    console.log(`currentIndex is ${currentIndex}`);
    console.log(`Length is ${length}`);
    //let tempDisplayedInvoices: InvoiceType[] = [];
    let tempDisplayedInvoices = selectedInvoices.filter((_, index) => {
        if(index >= (currentIndex) && index < (currentIndex + length)){
            return true;
        }
        else{
            return false;
        }
    });

    console.log("temp invoices forward is");
    console.log(tempDisplayedInvoices);
    setCurrentIndex(currentIndex + length);
    setDisplayedInvoices(tempDisplayedInvoices);
  }
 
  function goBackward(){
    let tempDisplayedInvoices = selectedInvoices.filter((_, index) => {
        if(index < currentIndex - length && index >= (currentIndex - length - length)){
            return true;
        }
        else{
            return false;
        }
    });

    setCurrentIndex(currentIndex - length); 
    setDisplayedInvoices(tempDisplayedInvoices);
  }

  function toggleModal(){
    setIsModalOpen(!isModalOpen);
  }

  function changeFilter(newFilter: "all" | "paid" | "unpaid"){
    setFilter(newFilter);

    if(newFilter === "all"){
        setSelectedInvoices(allInvoices);
        setDisplayedInvoices(allInvoices.filter((_, index) => index < length));
    }
    else if(newFilter === "paid"){
        let filteredInvoices = allInvoices.filter((item) => item.status === "paid");
        setSelectedInvoices(() => {
            setDisplayedInvoices(filteredInvoices.filter((_, index) => index < length));
            return filteredInvoices;
        });
    }
    else{
        let filteredInvoices = allInvoices.filter((item) => item.status === "unpaid");
        setSelectedInvoices(() => {
            setDisplayedInvoices(filteredInvoices.filter((_, index) => index < length));
            return filteredInvoices;
        });
    }
    setCurrentIndex(length);
  }

  return (
    <div className="invoices" onClick={() => isModalOpen && setIsModalOpen(false)}>
      <div className="invoices-header">
        <span >Invoices</span>
        <div className="invoices-header-right">
          <div className="invoice-modal-icon" style={{position: "relative"}} onClick={() => toggleModal()}>
          {isModalOpen && <div className="invoices-modal">
        <ul>
            <li onClick={() => changeFilter("all")}><span>All</span>
            {filter === "all" && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>}
            </li>
            <li onClick={() => changeFilter("paid")}><span>Paid</span>
            {filter === "paid" && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>}
            </li>
            <li onClick={() => changeFilter("unpaid")}><span>Unpaid</span>
            {filter === "unpaid" && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>}
            </li>
        </ul>
      </div>}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z" />
          </svg>
          </div>
          <div className="invoice-download-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6c4.5-4.2 7.1-10.1 7.1-16.3c0-12.3-10-22.3-22.3-22.3L304 256l0-96c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32l0 96-57.7 0C138 256 128 266 128 278.3c0 6.2 2.6 12.1 7.1 16.3l107.1 99.9c3.8 3.5 8.7 5.5 13.8 5.5s10.1-2 13.8-5.5l107.1-99.9z" />
          </svg>
          </div>
          <span>Report</span>
        </div>
      </div>
      <p id="total-invoices">{allInvoices.length} invoices</p>

      <table id="invoices-table">
        <thead>
            <tr>
            <th>Customer name</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Product ID</th>
            <th>Status</th>
            <th>Option</th>
            </tr>
        </thead>

        <tbody>
            {
            displayedInvoices.map((invoice, index) => {
                return <tr key={index}>
                <td>
                    <div>
                    <img src={`../src/assets/images/img-${(invoice.id % 10) + 1}.jpg`} alt="profile picture" />
                    <span>{invoice.customer_name}</span>
                    </div>
                </td>
                <td>{invoice.date}</td>
                <td>{invoice.amount}</td>
                <td>{invoice.product_ID}</td>
                <td className={invoice.status}><span>{invoice.status}</span></td>
                <td>more</td>
                </tr>
            })
            }
        </tbody>
      </table>

      <div className="pagination-cont">
        {!(currentIndex <= length) && <button className="previous-button" onClick={() => goBackward()}>{"<"} Prev</button>}
        <div className="pages">{Math.floor(currentIndex / length)}/{Math.floor(selectedInvoices.length / length) }</div>
        {(currentIndex + length <= selectedInvoices.length) && <button className="next-button" onClick={() => goForward()}>Next {">"}</button>}
      </div>
    </div>
  );
}

export default Invoices;
