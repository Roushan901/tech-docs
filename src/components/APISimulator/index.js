import React, { useState } from 'react';
import styles from './styles.module.css';

/**
 * APISimulator - Interactive API request simulator
 * Perfect for demonstrating API endpoints with live request/response
 */
export default function APISimulator({ 
  endpoint = '/api/example',
  method = 'GET',
  initialParams = {},
  initialBody = '',
  headers = {},
  description = 'Test API endpoint'
}) {
  const [requestMethod, setRequestMethod] = useState(method);
  const [params, setParams] = useState(JSON.stringify(initialParams, null, 2));
  const [requestBody, setRequestBody] = useState(initialBody);
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseTime, setResponseTime] = useState(null);

  const simulateRequest = async () => {
    setLoading(true);
    setResponse('');
    const startTime = Date.now();

    try {
      // Parse parameters
      let parsedParams = {};
      try {
        parsedParams = params ? JSON.parse(params) : {};
      } catch (e) {
        throw new Error('Invalid JSON in parameters');
      }

      // Build query string
      const queryString = Object.keys(parsedParams).length > 0 
        ? '?' + new URLSearchParams(parsedParams).toString()
        : '';

      const fullUrl = `${endpoint}${queryString}`;

      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));
      
      const mockResponse = {
        status: 200,
        statusText: 'OK',
        data: {
          message: 'Request successful',
          endpoint: fullUrl,
          method: requestMethod,
          timestamp: new Date().toISOString(),
          params: parsedParams,
          ...(requestMethod !== 'GET' && requestBody && { body: JSON.parse(requestBody) })
        }
      };

      const endTime = Date.now();
      setResponseTime(endTime - startTime);
      setResponse(JSON.stringify(mockResponse, null, 2));
    } catch (error) {
      setResponse(JSON.stringify({
        status: 400,
        error: error.message,
        timestamp: new Date().toISOString()
      }, null, 2));
      setResponseTime(Date.now() - startTime);
    } finally {
      setLoading(false);
    }
  };

  const clearAll = () => {
    setParams(JSON.stringify(initialParams, null, 2));
    setRequestBody(initialBody);
    setResponse('');
    setResponseTime(null);
  };

  return (
    <div className={styles.simulatorContainer}>
      <div className={styles.simulatorHeader}>
        <h3>🔌 API Simulator</h3>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.requestSection}>
        <div className={styles.requestLine}>
          <select 
            value={requestMethod} 
            onChange={(e) => setRequestMethod(e.target.value)}
            className={`${styles.methodSelect} ${styles[requestMethod.toLowerCase()]}`}
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="PATCH">PATCH</option>
            <option value="DELETE">DELETE</option>
          </select>
          <input 
            type="text" 
            value={endpoint}
            readOnly
            className={styles.endpointInput}
          />
        </div>

        <div className={styles.paramsSection}>
          <label className={styles.sectionLabel}>
            Query Parameters (JSON)
          </label>
          <textarea
            value={params}
            onChange={(e) => setParams(e.target.value)}
            className={styles.jsonTextarea}
            placeholder='{"key": "value"}'
            rows={4}
          />
        </div>

        {requestMethod !== 'GET' && (
          <div className={styles.bodySection}>
            <label className={styles.sectionLabel}>
              Request Body (JSON)
            </label>
            <textarea
              value={requestBody}
              onChange={(e) => setRequestBody(e.target.value)}
              className={styles.jsonTextarea}
              placeholder='{"data": "value"}'
              rows={6}
            />
          </div>
        )}

        <div className={styles.actions}>
          <button 
            onClick={simulateRequest} 
            disabled={loading}
            className={styles.sendButton}
          >
            {loading ? '⏳ Sending...' : '🚀 Send Request'}
          </button>
          <button 
            onClick={clearAll}
            className={styles.clearButton}
          >
            Clear
          </button>
        </div>
      </div>

      {(response || loading) && (
        <div className={styles.responseSection}>
          <div className={styles.responseHeader}>
            <span className={styles.sectionLabel}>Response</span>
            {responseTime && (
              <span className={styles.responseTime}>
                ⚡ {responseTime}ms
              </span>
            )}
          </div>
          <pre className={styles.responseBody}>
            {loading ? 'Sending request...' : response}
          </pre>
        </div>
      )}
    </div>
  );
}
