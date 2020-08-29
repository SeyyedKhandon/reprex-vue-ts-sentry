import Vue from 'vue';
import * as Sentry from '@sentry/browser';
import { Vue as VueIntegration } from '@sentry/integrations';

if (process.env.NODE_ENV !== 'development')
	Sentry.init({
		dsn: 'https://b65f59d0f7e14953362491e32bc8341c@sentry.service.io/14',
		integrations: [ new VueIntegration({ Vue, attachProps: true, logErrors: true }) ]
	});
