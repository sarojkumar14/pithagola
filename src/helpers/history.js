import { createBrowserHistory } from 'history';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
//export const history = createBrowserHistory({ basename: "FinancialSteering" });
export const history = createBrowserHistory({ basename: baseUrl });


