# Roblox Executor List
This was a fun project to do took only 3 days :)
 - This project displays a list of Roblox executors, and you can easily customize or add new executor by modifying the `executors.json` file.

## How to Add or Modify an Executor

### 1. Modify `executors.json`

Executors are stored in the `executors.json` file. To add or modify an executor, follow this structure:

```json
{
  "name": "Executor Name",
  "logo": "Path to logo or logo URL",
  "website": "Executor Website URL (optional)",
  "discord": "Executor Discord URL (optional)",
  "status": "Status (e.g., 'Working', 'Patched')",
  "detection": "Detection status (e.g., 'Detected', 'Undetected')",
  "pros": ["Pro 1", "Pro 2"],
  "neutral": ["Neutral point 1"],
  "cons": ["Con 1"],
  "device": ["Windows", "Android", "iOS", "Mac"],
  "developer": [
    { "name": "Developer Name", "pfp": "Developer Avatar URL" }
  ],
  "buylink": "Purchase link (if paid, optional)",
  "key": false,
  "type": "Free"
}
```

### 2. Add a New Executor

- **Copy & modify the structure** to add a new executor.

## **Heres the example on how to modify the json**

- **`name`**  
  *Description*: The name of the executor. This should be a simple.
  
  *Example*: `"name": "Executor One"`

- **`logo`**  
  *Description*: Path to the logo image or a URL pointing to the image file.
  
  *Example*: `"logo": "./assets/executor_logo.png"` or `"logo": "https://example.com/logo.png"`

- **`website`**  
  *Description*: The official website for the executor. If the executor has an official website. If the executor does have a website, leave it as an empty string. (this is optional)
  
  *Example*: `"website": "https://example.com/"`

- **`discord`**  
  *Description*: The official Discord server link for the executor. If there's a Discord server for the executor, include the OFFICIAL invite URL. If there's no official discord link to the executor, leave it as an empty string. (this is optional)
  
  *Example*: `"discord": "https://discord.gg/example"`

- **`status`**  
  *Description*: The current status of the executor. Use one of these values:
    - `"Working"`: The executor is Working.
    - `"Partial Working"`: The executor has some issues but is still usable.
    - `"Patched"`: The executor no longer works due to updates or other issues.

  *Example*: `"status": "Working"`

- **`detection`**  
  *Description*: The detection status of the executor if it's detected by roblox. Use one of these values:
    - `"Detected"`: The executor is detected by by roblox and might result in a ban.
    - `"Partial Detected"`: The executor is kinda detected idk.
    - `"Undetected"`: The executor is not detected by roblox and should be safe to use.
      
  *Example*: `"detection": "Undetected"`

- **`pros`**  
  *Description*: A list of benefits or positive features of the executor.
  
  *Example*:  
  `"pros": ["Free", "interface is nice", "Updated frequently"]`

- **`neutral`**  
  *Description*: A list of neutral points. These are things that could be either positive or negative depending on the person or context.
  
  *Example*:  
  `"neutral": ["Level 3 detection risk", "Not compatible with all games"]`

- **`cons`**  
  *Description*: A list of downsides of the executor.
  
  *Example*:  
  `"cons": ["Has bugs", "Not available on macOS"]`

- **`device`**  
  *Description*: A list of devices that the executor supports.
  
  *Example*:  
  `"device": ["Windows", "Android", "Mac"]`

- **`developer`**  
  *Description*: A list of the developers who created or maintain the executor. Each developer should have their name and a profile picture URL. If multiple developers are involved, list each one in the array.
   
  *Example*:  
  `"developer": [{ "name": "Name", "pfp": "random pfp link" }, { "name": "Name", "pfp": "random pfp link" }]`

- **`buylink`**  
  *Description*: If the executor is paid, provide the link to the purchase page. If it’s a free executor, leave this as a empty string.
  
  *Example*:  
  `"buylink": "https://example.com/buy"`

- **`key`**  
  *Description*: Whether the executor requires a key. Set this to `true` if a key is required (for example, for free executors), or `false` if it’s not needed (for paid executors).
  
  *Example*:  
  `"key": false` or `"key": true`

- **`type`**  
  *Description*: The type of the executor. This indicates whether the executor is free, paid, or a freemium service (offers both free and paid features).  
  *Values*:
    - `"Free"`: The executor is completely free.
    - `"Paid"`: The executor requires a purchase.
    - `"Freemium"`: The executor is free with a paid feature to not use a key.
      
  *Example*:  
  `"type": "Freemium"`

---

### 3. Save Your Changes

After modifying the JSON, **save your changes**.

### 4. Submit a Pull Request

If you're ready to submit your changes:
1. Fork the repository.
2. Make a pull request with your new or updated executor data.
3. I'll check your changes & see if it's good to change.

## Note:
- Make sure to use valid URLs for images, websites, & Discord links.
- Ensure that the JSON syntax is correct, with commas separating the different properties.
- If an executor does not have a website or Discord link, simply leave those fields as an empty string (`""`).
- You can change the website design that you want & i'll check if it's good design to make in the website.

---


# How the react App Works
- kept this from the generated react app readme :p

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
