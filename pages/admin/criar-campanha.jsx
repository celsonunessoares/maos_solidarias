import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "@/components/primitives/button";
import Image from "next/image";
import { Title } from "@/components/primitives/title";
import { InputFloat } from "@/components/primitives/input/input";
import { supabase } from "@/lib/supabase";

const CriarCampanha = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    categoria: "",
    meta: "",
    dataInicio: "",
    dataFim: "",
    localizacao: "",
    imagemUrl: "",
  });

  useEffect(() => {
    // Verificar autenticação e permissões de administrador
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
          router.push("/login");
          return;
        }

        setIsAuthenticated(true);

        // TODO: Verificar se o usuário é administrador
        // Por enquanto, apenas verifica se está autenticado
        // A lógica de verificação de admin será implementada depois
        setIsAdmin(true);
      } catch (error) {
        console.error("Erro ao verificar autenticação:", error);
        router.push("/login");
      }
    };

    checkAuth();
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: "", text: "" });

    // TODO: Implementar lógica de criação da campanha no Supabase
    // Por enquanto, apenas simula o envio
    try {
      // Simulação de delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setMessage({
        type: "success",
        text: "Campanha criada com sucesso! (Lógica de integração será implementada)",
      });
      
      // Limpar formulário
      setFormData({
        titulo: "",
        descricao: "",
        categoria: "",
        meta: "",
        dataInicio: "",
        dataFim: "",
        localizacao: "",
        imagemUrl: "",
      });
    } catch (error) {
      setMessage({
        type: "error",
        text: error.message || "Erro ao criar campanha. Tente novamente.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated || !isAdmin) {
    return (
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh",
        flexDirection: "column"
      }}>
        <div>Verificando permissões...</div>
      </div>
    );
  }

  return (
    <div className="container-fluid" id="container-main">
      <div className="row">
        <div className="col-lg-12 admin-container">
          <div className="admin-header">
            <Link href="/">
              <Image
                className="logo"
                src="/assets/maos.png"
                width={56}
                height={56}
                alt="Mãos Solidárias"
              />
            </Link>
            <Title marginTop="1.5rem">Painel de Administração</Title>
            <p className="admin-subtitle">Criar Nova Campanha de Doação</p>
          </div>

          {message.text && (
            <div
              className={`alert ${
                message.type === "success" ? "alert-success" : "alert-danger"
              }`}
              role="alert"
              style={{ marginTop: "1rem", marginBottom: "1rem" }}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="admin-form">
            <div className="row">
              <div className="col-md-6">
                <InputFloat
                  type="text"
                  name="titulo"
                  placeholder="Título da Campanha"
                  information="Título da Campanha"
                  value={formData.titulo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <InputFloat
                  type="text"
                  name="categoria"
                  placeholder="Categoria (ex: Enchentes, Incêndios, Secas)"
                  information="Categoria"
                  value={formData.categoria}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-floating my-3">
              <textarea
                className="form-control"
                id="descricao"
                name="descricao"
                placeholder="Descrição da Campanha"
                style={{ height: "120px" }}
                value={formData.descricao}
                onChange={handleChange}
                required
              />
              <label htmlFor="descricao">Descrição da Campanha</label>
            </div>

            <div className="row">
              <div className="col-md-4">
                <InputFloat
                  type="number"
                  name="meta"
                  placeholder="Meta de Arrecadação"
                  information="Meta de Arrecadação (R$)"
                  value={formData.meta}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <InputFloat
                  type="date"
                  name="dataInicio"
                  placeholder="Data de Início"
                  information="Data de Início"
                  value={formData.dataInicio}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <InputFloat
                  type="date"
                  name="dataFim"
                  placeholder="Data de Término"
                  information="Data de Término"
                  value={formData.dataFim}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <InputFloat
                  type="text"
                  name="localizacao"
                  placeholder="Localização (Cidade, Estado)"
                  information="Localização"
                  value={formData.localizacao}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <InputFloat
                  type="url"
                  name="imagemUrl"
                  placeholder="URL da Imagem"
                  information="URL da Imagem"
                  value={formData.imagemUrl}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="admin-actions">
              <Button
                type="submit"
                customWidth
                className="btn-primary btn-admin fw-medium"
                aria-label="Criar Campanha"
                disabled={isLoading}
              >
                {isLoading ? "Criando..." : "Criar Campanha"}
              </Button>
              <Link href="/">
                <Button
                  type="button"
                  className="btn-secondary btn-admin-cancel fw-medium"
                  aria-label="Cancelar"
                >
                  Cancelar
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CriarCampanha;

