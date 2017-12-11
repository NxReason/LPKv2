import Header from './header';
import MessageBox from './messageBox';
import Scheme from './scheme';
import EventsFeed from './eventsFeed';

const View = {
  Header,
  MessageBox,
  Scheme,
  EventsFeed,

  clear() {
    this.MessageBox.hide();
    this.Scheme.clear();
    this.EventsFeed.clear();
  },
};

export default View;
