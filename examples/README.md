# Example Configuration Files

This directory contains example configuration files and scripts for different deployment scenarios.

## Files

### webhook-handler.sh
Example webhook handler script that can be deployed on your server to receive deployment notifications from the CI pipeline.

**Usage:**
1. Copy to your deployment server
2. Make executable: `chmod +x webhook-handler.sh`
3. Set up a simple HTTP server to call this script (e.g., using nginx, caddy, or a simple node.js server)
4. Configure the webhook URL in your GitHub repository secrets

**Example nginx configuration:**
```nginx
location /deploy {
    content_by_lua_block {
        local body = ngx.req.get_body_data()
        if body then
            local handle = io.popen("/path/to/webhook-handler.sh", "w")
            handle:write(body)
            handle:close()
        end
        ngx.say('{"status": "received"}')
    }
}
```

## Server Setup Examples

### Simple Webhook Server with Node.js
```javascript
const express = require('express');
const { exec } = require('child_process');

const app = express();
app.use(express.json());

app.post('/deploy', (req, res) => {
    const payload = JSON.stringify(req.body);
    exec(`echo '${payload}' | /path/to/webhook-handler.sh`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error}`);
            return res.status(500).json({ error: 'Deployment failed' });
        }
        res.json({ status: 'success', output: stdout });
    });
});

app.listen(3001, () => console.log('Webhook server running on port 3001'));
```

### Using systemd for webhook service
```ini
[Unit]
Description=Deployment Webhook Handler
After=network.target

[Service]
Type=simple
User=deployer
ExecStart=/usr/local/bin/webhook-server
Restart=always

[Install]
WantedBy=multi-user.target
```