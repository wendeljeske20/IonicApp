import { Component } from '@angular/core';

import { ListPage } from '../list/list';
import { ConfigPage } from '../config/config';
import { NotePage } from '../note/note';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NotePage;
  tab2Root = ListPage;
  tab3Root = ConfigPage;

  constructor() {

  }
}
