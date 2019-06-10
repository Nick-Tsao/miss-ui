## Internationalization
The default language of Miss is Chinese. If you want to use other languages, you can follow the instructions below.

### Switch languages
Miss supports multiple languages with the Locale component, and the `Locale.use` method allows you to switch to diffrent languages.

```js
import { Locale } from 'miss-ui';
import enUS from 'miss-ui/lib/locale/lang/en-US';

Locale.use('en-US', enUS);
```

### Modify default configs
Use `Locale.add` method to modify the default configs.

```js
import { Locale } from 'miss-ui';

const messages = {
  'en-US': {
    msPicker: {
      confirm: 'Close'
    }
  }
};

Locale.add(messages);
```

### Config files
Current supported languages:

| Language | Filename |
|------|------|
| Chinese | zh-CN |
| English | en-US |
