package controller;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "Controller", urlPatterns =
{
    "/Controller"
})
public class Controller extends HttpServlet
{

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException
    {
        response.setContentType("text/html;charset=UTF-8");
        request.setCharacterEncoding("UTF-8");
        try (PrintWriter out = response.getWriter())
        {

            if (request.getParameter("curso") == null || request.getParameter("curso").equals(""))
            {
                response.setStatus(400);
                out.print("{\"erro\":\"Parâmetro curso não está preenchido!\"}");
                return;
            }

            if (request.getParameter("turno") == null || request.getParameter("turno").equals(""))
            {
                response.setStatus(400);
                out.print("{\"erro\":\"Parâmetro turno não está preenchido!\"}");
                return;
            }

            if (request.getParameter("qtdeEstudantes") == null || request.getParameter("qtdeEstudantes").equals(""))
            {
                response.setStatus(400);
                out.print("{\"erro\":\"Parâmetro qtdeEstudantes não está preenchido!\"}");
                return;
            }

            if (request.getParameter("data") == null || request.getParameter("data").equals(""))
            {
                response.setStatus(400);
                out.print("{\"erro\":\"Parâmetro data não está preenchido!\"}");
                return;
            }

            response.setStatus(200);
            out.print("{\"data\":\"Curso salvo com sucesso!\"}");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException
    {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException
    {
        processRequest(request, response);
    }
}
