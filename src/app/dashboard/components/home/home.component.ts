import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  customers!: any[];

  representatives!: any[];

  statuses!: any[];

  loading: boolean = false;

  activityValues: number[] = [0, 100];

  searchValue: string | undefined;

  constructor() {}

  ngOnInit() {
      // Static customer data for testing purposes
      this.customers = [
          {
              id: 1,
              name: 'John Doe',
              country: { name: 'USA', code: 'us' },
              representative: { name: 'Amy Elsner', image: 'amyelsner.png' },
              date: new Date('2023-01-15'),
              balance: 5000,
              status: 'qualified',
              activity: 75,
              verified: true
          },
          {
              id: 2,
              name: 'Jane Smith',
              country: { name: 'Germany', code: 'de' },
              representative: { name: 'Anna Fali', image: 'annafali.png' },
              date: new Date('2023-05-22'),
              balance: 2000,
              status: 'new',
              activity: 40,
              verified: false
          },
          {
              id: 3,
              name: 'Michael Brown',
              country: { name: 'Canada', code: 'ca' },
              representative: { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
              date: new Date('2023-08-10'),
              balance: 1200,
              status: 'negotiation',
              activity: 60,
              verified: true
          }
      ];

      // Static representative data for testing purposes
      this.representatives = [
          { name: 'Amy Elsner', image: 'amyelsner.png' },
          { name: 'Anna Fali', image: 'annafali.png' },
          { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      ];

      // Static statuses for testing purposes
      this.statuses = [
          { label: 'Unqualified', value: 'unqualified' },
          { label: 'Qualified', value: 'qualified' },
          { label: 'New', value: 'new' },
          { label: 'Negotiation', value: 'negotiation' },
          { label: 'Renewal', value: 'renewal' },
          { label: 'Proposal', value: 'proposal' }
      ];
  }

    clear(table: any) {
        table.clear();
        this.searchValue = '';
    }

    getSeverity(status: string): 'success' | 'info' | 'warning' | 'danger' | undefined {
    switch (status.toLowerCase()) {
        case 'unqualified':
            return 'danger';
        case 'qualified':
            return 'success';
        case 'new':
            return 'info';
        case 'negotiation':
            return 'warning';
        case 'renewal':
            return undefined;
        default:
            return undefined;
        }
    }

    

    filter(value: any) {
        console.log('Filter value:', value);
    }


  
}