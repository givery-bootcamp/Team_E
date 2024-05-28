package controllers

import (
	"encoding/json"
	"io"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
)

type ErrResponse struct {
	Message string `json:"message"`
}

func NewErrResponse(message string) string {
	jsonBytes, _ := json.Marshal(ErrResponse{message})
	return string(jsonBytes)
}

func TestRequest(
	t *testing.T,
	app *gin.Engine,
	method string,
	path string,
	body io.Reader,
	status int,
	response string,
) {
	w := httptest.NewRecorder()
	req, _ := http.NewRequest(method, path, body)
	app.ServeHTTP(w, req)

	assert.Equal(t, status, w.Code)
	assert.Equal(t, response, w.Body.String())
}
